from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
import numpy as np
import cv2
import matplotlib
matplotlib.use('Agg')  
import matplotlib.pyplot as plt
import seaborn as sns
from tensorflow.keras.models import load_model
from PIL import Image
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
from django.conf import settings

# Load traffic sign model once
MODEL_PATH = os.path.join('api', 'models', 'simple_traffic_model.h5')
model = load_model(MODEL_PATH)
print("Model input shape:", model.input_shape)
# Traffic sign class map
class_map = {
    0: 'Speed limit (20km/h)', 1: 'Speed limit (30km/h)', 2: 'Speed limit (50km/h)',
    3: 'Speed limit (60km/h)', 4: 'Speed limit (70km/h)', 5: 'Speed limit (80km/h)',
    6: 'End of speed limit (80km/h)', 7: 'Speed limit (100km/h)', 8: 'Speed limit (120km/h)',
    9: 'No passing', 10: 'No passing for vehicles over 3.5 tons', 11: 'Right-of-way at intersection',
    12: 'Priority road', 13: 'Yield', 14: 'Stop', 15: 'No vehicles',
    16: 'Vehicles over 3.5 tons prohibited', 17: 'No entry', 18: 'General caution',
    19: 'Dangerous curve to the left', 20: 'Dangerous curve to the right', 21: 'Double curve',
    22: 'Bumpy road', 23: 'Slippery road', 24: 'Road narrows on the right',
    25: 'Road work', 26: 'Traffic signals', 27: 'Pedestrians', 28: 'Children crossing',
    29: 'Bicycles crossing', 30: 'Beware of ice/snow', 31: 'Wild animals crossing',
    32: 'End of speed and passing limits', 33: 'Turn right ahead', 34: 'Turn left ahead',
    35: 'Ahead only', 36: 'Go straight or right', 37: 'Go straight or left',
    38: 'Keep right', 39: 'Keep left', 40: 'Roundabout mandatory',
    41: 'End of no passing', 42: 'End of no passing for vehicles over 3.5 tons'
}

@api_view(['GET'])
def home(request):
    return Response({"message": "Welcome to the API!"})

@api_view(['POST'])
def predict_traffic_sign(request):
    image = request.FILES.get('image')

    if not image:
        return Response({"error": "No image uploaded"}, status=400)

    path = default_storage.save(f'uploads/{image.name}', image)


    file_path = os.path.join(settings.MEDIA_ROOT, path)

    print("Full file path:", file_path)

    try:
        pil_img = Image.open(file_path).convert('RGB')
        img = np.array(pil_img)
        img = cv2.resize(img, (64, 64))
        img = img / 255.0
        img_input = np.expand_dims(img, axis=0)

        prediction = model.predict(img_input)
        predicted_class = int(np.argmax(prediction))
        predicted_label = class_map[predicted_class]

        print("Predicted class:", predicted_class)
        print("Predicted label:", predicted_label)

        return Response({
            "predicted_class": predicted_class,
            "predicted_label": predicted_label,
            'Image URL': request.build_absolute_uri(file_path)
        })

    except Exception as e:
        print("ERROR:", str(e))
        return Response({"error": str(e)}, status=500)

@api_view(['POST'])
def upload_document(request):
    print("Received request with files:", request.FILES)
    doc = request.FILES.get('document')
    if not doc:
        return Response({"error": "No document uploaded"}, status=400)

    # Save file to media/documents
    path = default_storage.save(f'documents/{doc.name}', doc)
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    print("Document saved at:", file_path)

    try:
        # Load DataFrame
        if doc.name.endswith('.csv'):
            df = pd.read_csv(file_path)
        else:
            df = pd.read_excel(file_path)

        # Summary
        result = {
            "Total_rows": df.shape[0],
            "Total_Columns": df.shape[1],
            "Total_null_no": df.isnull().sum().sum(),
            "Total_Columns_list": df.columns.tolist(),
            "total_null_values": df.isnull().sum().to_dict(),
            "total_no_unique_values": df.nunique().to_dict()
        }

        # Plots directory
        plots_dir = os.path.join(settings.MEDIA_ROOT, 'plots')
        os.makedirs(plots_dir, exist_ok=True)

        numeric_df = df.select_dtypes(include='number')

        def save_plot(filename, fig_func):
            if numeric_df.empty:
                return ""
            fig = fig_func(numeric_df)
            # For pandas plots return value is Axes, get figure
            if hasattr(fig, 'get_figure'):
                fig = fig.get_figure()
            plt.savefig(os.path.join(plots_dir, filename))
            plt.close()
            return os.path.join('media', 'plots', filename)

        # Generate all plots
        pairplot_url = save_plot('pairplot.png', lambda df: sns.pairplot(df))
        heatmap_url = save_plot('heatmap.png', lambda df: sns.heatmap(df.corr(), annot=True))
        histogram_url = save_plot('histogram.png', lambda df: df.hist())
        box_plot_url = save_plot('boxplot.png', lambda df: df.plot(kind='box'))
        line_plot_url = save_plot('lineplot.png', lambda df: df.plot())
        scatter_plot_url = save_plot(
            'scatterplot.png', 
            lambda df: df.plot(kind='scatter', x=df.columns[0], y=df.columns[1] if df.shape[1]>1 else df.columns[0])
        )

        result.update({
            "pairplot_url": pairplot_url,
            "heatmap_url": heatmap_url,
            "histogram_url": histogram_url,
            "box_plot_url": box_plot_url,
            "line_plot_url": line_plot_url,
            "scatter_plot_url": scatter_plot_url
        })

        return Response(result)

    except Exception as e:
        return Response({"error": str(e)}, status=500)