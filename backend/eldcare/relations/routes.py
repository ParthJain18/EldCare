from flask import jsonify, request
import pyrebase
from app import app
from config import firebase_config

db = pyrebase.initialize_app(firebase_config).database()

@app.route("/addPatient", methods=["POST"])
def add_patient():
    from eldcare.auth.methods import auth
    user = auth.current_user
    doctorId = user["localId"]
    patientEmail = request.json.get("patientEmail")
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        
        patientId_dict = db.child("users").order_by_child("email").equal_to(patientEmail).get().val()
        patientId = next(iter(patientId_dict))
        print(patientId)
        db.child("doctors").child(doctorId).child("patient_list").push(patientId)
        db.child("elderly").child(patientId).child("doctor_list").push(doctorId)
        return jsonify({"message": "Patient added successfully!"}), 201
    except Exception as e:
        return jsonify({"message": "An error occurred while adding patient.","error": str(e)}), 402

@app.route("/addRelative", methods=["POST"])
def add_relative():
    from eldcare.auth.methods import auth
    patientEmail = request.json.get("patientEmail")
    user = auth.current_user
    patientId = user["localId"]
    
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        
        relative_dict = db.child("users").order_by_child("email").equal_to(patientEmail).get().val()
        relativeId = next(iter(relative_dict))

        db.child("relative").child(patientId).child("relative_list").push(relativeId)
        db.child("elderly").child(relativeId).child("relative_list").push(patientId)
        return jsonify({"message": "Relative added successfully!"}), 201
    except Exception as e:
        return jsonify({"message": "An error occurred while adding relative.","error": str(e)}), 402

@app.route("/getPatients/<userId>", methods=["GET"])
def get_patients(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        user = auth.current_user
        userId = user["localId"]
        patients = db.child("doctors").child(userId).child("patient_list").get().val()
        return jsonify({"message": "Patients retrieved successfully!", "patients": patients}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving patients.","error": str(e)}), 402

@app.route("/getDoctors/<userId>", methods=["GET"])
def get_doctors(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        doctors = db.child("elderly").child(userId).child("doctor_list").get().val()
        return jsonify({"message": "Doctors retrieved successfully!", "doctors": doctors}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving doctors.","error": e}), 402

@app.route("/getRelatives/<userId>", methods=["GET"])
def get_relatives(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        relatives = db.child("elderly").child(userId).child("relative_list").get().val()
        return jsonify({"message": "Relatives retrieved successfully!", "relatives": relatives}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving relatives.","error": str(e)}), 402



# @app.route("/getDoctors/<userId>", methods=["GET"])
# def get_doctors(userId):
#     from eldcare.auth.methods import auth
#     try:
#         if auth.current_user is None:
#             return jsonify({"message": "Missing authorization token"}), 401
#         doctors = db.child("elderly").child(userId).child("doctor_list").get().val()
#         return jsonify({"message": "Doctors retrieved successfully!", "doctors": doctors}), 200
#     except Exception as e:
#         return jsonify({"message": "An error occurred while retrieving doctors.","error": e}), 402

# @app.route("/getRelatives/<userId>", methods=["GET"])
# def get_relatives(userId):
#     from eldcare.auth.methods import auth
#     try:
#         if auth.current_user is None:
#             return jsonify({"message": "Missing authorization token"}), 401
#         relatives = db.child("elderly").child(userId).child("relative_list").get().val()
#         return jsonify({"message": "Relatives retrieved successfully!", "relatives": relatives}), 200
#     except Exception as e:
#         return jsonify({"message": "An error occurred while retrieving relatives.","error": e}), 402
    
# @app.route("/getDoctor/<userId>", methods=["GET"])
# def get_doctor(userId):
#     from eldcare.auth.methods import auth
#     try:
#         if auth.current_user is None:
#             return jsonify({"message": "Missing authorization token"}), 401
#         doctor = db.child("doctors").child(userId).get().val()
#         return jsonify({"message": "Doctor retrieved successfully!", "doctor": doctor}), 200
#     except Exception as e:
#         return jsonify({"message": "An error occurred while retrieving doctor.","error": e}), 402

@app.route("/getPatient/<userId>", methods=["GET"])
def get_patient(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        patient = db.child("elderly").child(userId).get().val()
        return jsonify({"message": "Patient retrieved successfully!", "patient": patient}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving patient.","error": str(e)}), 402

@app.route("/getRelative/<userId>", methods=["GET"])
def get_relative(userId):
    from eldcare.auth.methods import auth
    try:
        if auth.current_user is None:
            return jsonify({"message": "Missing authorization token"}), 401
        relative = db.child("relative").child(userId).get().val()
        return jsonify({"message": "Relative retrieved successfully!", "relative": relative}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while retrieving relative.","error": str(e)}), 402