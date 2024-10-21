from flask import jsonify, request, make_response
import pyrebase
from app import app
from config import firebase_config


db = pyrebase.initialize_app(firebase_config).database()

@app.route("/location/<userId>", methods=["GET"])
def get_location(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        location = db.child("location").child(userId).get().val()
        return jsonify({"message": "Location retrieved successfully!", "location": location}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving location.","error": str(e)}), 402