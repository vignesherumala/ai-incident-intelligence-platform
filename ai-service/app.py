from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load trained models
category_model = joblib.load("models/incident_classifier.pkl")
severity_model = joblib.load("models/severity_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "Text is required"}), 400

    category = category_model.predict([text])[0]
    severity = severity_model.predict([text])[0]

    return jsonify({
        "predictedCategory": category,
        "predictedSeverity": severity
    })

if __name__ == "__main__":
    app.run(port=6000, debug=True)
