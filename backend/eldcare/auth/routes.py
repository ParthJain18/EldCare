from flask import jsonify, request, make_response
import pyrebase
from app import app
from config import firebase_config
import json

db = pyrebase.initialize_app(firebase_config).database()

@app.route("/auth/register", methods=["POST"])
def register():
    from eldcare.auth.methods import auth

    fullName = request.json.get("fullName")
    email = request.json.get("email")
    password = request.json.get("password")
    userType = request.json.get("userType")
    gender = request.json.get("gender")

    # Validate user input (email format, password strength)
    

    # hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    # Create user with Firebase Auth
    try:
        user = auth.create_user_with_email_and_password(email, password)
    except Exception as e:
        error_json = json.loads(str(e.args[1]))
        return jsonify({"message": error_json["error"]["message"]}), 400
    
    print(user)
    db.child("users").child(user["localId"]).set(
        {   
            "userId": user["localId"],
            "fullName": fullName,
            "email": email,
            "userType": userType,
            "gender": gender 
        })

    if userType == "doctor":
        db.child("doctors").child(user["localId"]).set(
            {   
                "userId": user["localId"],
                "fullName": fullName,
                "email": email,
                "patient_list": []
            }
        )
    elif userType == "relative":
        db.child("relatives").child(user["localId"]).set(
            {   
                "userId": user["localId"],
                "fullName": fullName,
                "email": email,
                "relative_list": []
            }
        )
    elif userType == "elderly":
        db.child("elderlies").child(user["localId"]).set(
            {   
                "userId": user["localId"],
                "fullName": fullName,
                "email": email,
                "doctor_list": [],
                "relative_list": []
            }
        )


    userDetails = db.child("users").child(user["localId"]).get().val()

    user = auth.sign_in_with_email_and_password(email, password)

    response = make_response(jsonify({"message": "Registration successful!", "userDetails": userDetails, "jwtToken": user["idToken"]}), 200)

    response.set_cookie('jwtToken', user["idToken"], expires=99999999, httponly=True, samesite='Strict')

    return response, 200


@app.route("/auth/login", methods=["POST"])
def login():
    from eldcare.auth.methods import auth

    # Extract user credentials
    email = request.json.get("email")
    password = request.json.get("password")

    # Try to sign in user with Firebase Auth
    try:
        user = auth.sign_in_with_email_and_password(email, password)
    except Exception as e:
        error_json = json.loads(e.args[1])
        return jsonify({"message": error_json["error"]["message"]}), 400

    # Generate JWT token for further authentication
    userDetails = db.child("users").child(user["localId"]).get().val()

    response = make_response(jsonify({"message": "Login successful!", "userDetails": userDetails, "jwtToken": user["idToken"]}), 200)

    response.set_cookie('jwtToken', user["idToken"], expires=9999999, httponly=True, samesite='Strict')
    return response, 200
