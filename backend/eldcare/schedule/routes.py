from flask import jsonify, request
import pyrebase
from app import app
from config import firebase_config
import json

db = pyrebase.initialize_app(firebase_config).database()

@app.route("/schedule", methods=["POST"])
def create_appointment():
    from eldcare.auth.methods import auth
    schedule_id = request.json.get("userId")
    startDate = request.json.get("startDate")
    endDate = request.json.get("endDate")
    title = request.json.get("title")
    allDay = request.json.get("allDay")
    description = request.json.get("description")
    byUserType = request.json.get("byUserType")

    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401

        appointmentId = db.generate_key()
        appointment_data = {
            "startDate": startDate,
            "endDate": endDate,
            "title": title,
            "allDay": allDay,
            "description": description,
            "byUserType": byUserType,
            }

        db.child("schedule").child(schedule_id).child(appointmentId).set(appointment_data)

        return jsonify({"message": "Appointment created successfully!", "appointmentId": schedule_id}), 201

    except Exception as e:
        return jsonify({"message": "An error occurred while creating appointment.","error": e}), 402

@app.route("/schedule/<userId>", methods=["GET"])
def get_appointments(userId):
    from eldcare.auth.methods import auth
    try:
        # userId = request.args.get('userId', default = None, type = str)

        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        
        appointments = db.child("schedule").child(userId).get().val()
        return jsonify({"message": "Appointments retrieved successfully!", "appointments": appointments}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving appointments.","error": e}), 402