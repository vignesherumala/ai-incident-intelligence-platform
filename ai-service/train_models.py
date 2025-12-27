from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib
import os

# Sample training data
data = [
    ("Payment gateway timeout error", "Application", "P1"),
    ("Database connection failed in production", "Database", "P1"),
    ("User unable to login to application", "Application", "P3"),
    ("Firewall blocking incoming traffic", "Network", "P2"),
    ("Suspicious login attempt detected", "Security", "P2"),
    ("Hard disk failure on server", "Hardware", "P1"),
    ("Slow network latency reported", "Network", "P3"),
    ("Application UI not loading", "Application", "P2"),
]

texts = [d[0] for d in data]
categories = [d[1] for d in data]
severities = [d[2] for d in data]

# Create models
category_model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("clf", LogisticRegression())
])

severity_model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("clf", LogisticRegression())
])

# Train models
category_model.fit(texts, categories)
severity_model.fit(texts, severities)

# Save models
os.makedirs("models", exist_ok=True)
joblib.dump(category_model, "models/incident_classifier.pkl")
joblib.dump(severity_model, "models/severity_model.pkl")

print("✅ AI models trained and saved successfully...")
