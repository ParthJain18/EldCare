from flask import jsonify, request, make_response
import pyrebase
from app import app
from config import firebase_config
from eldcare.chatClassifier.classifier_model import classify_chat
from eldcare.Chat.OpenAiChat import get_schedule_answer, get_general_answer, set_reminder

db = pyrebase.initialize_app(firebase_config).database()

@app.route("/chat", methods=["POST"])
def get_chat():
    from eldcare.auth.methods import auth
    input_text = request.json.get("input_text")
    userId = request.json.get("userId")
    try:
        chat_type = classify_chat(input_text)
        if chat_type == "schedule-related":
            res = get_schedule_answer(input_text, userId)
        elif chat_type == "reminder":
            res = set_reminder(input_text)
        else:
            res = get_general_answer(input_text)

        return jsonify({"message": "Chat retrieved successfully!", "chat": res}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving chat.","error": str(e)}), 402