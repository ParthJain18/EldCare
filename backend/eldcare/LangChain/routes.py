from flask import jsonify, request, make_response
import pyrebase
from app import app
from config import firebase_config
from eldcare.chatClassifier.classifier_model import classify_chat
from eldcare.LangChain.langchainChat import get_schedule_answer, get_general_answer

db = pyrebase.initialize_app(firebase_config).database()

@app.route("/chat", methods=["POST"])
def get_chat():
    from eldcare.auth.methods import auth
    input_text = request.json.get("input_text")
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        chat_type = classify_chat(input_text)
        if chat_type == "schedule-related":
            res = get_schedule_answer(input_text)
        else:
            res = get_general_answer(input_text)

        return jsonify({"message": "Chat retrieved successfully!", "chat": res}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving chat.","error": e}), 402