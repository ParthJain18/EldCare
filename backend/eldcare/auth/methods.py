import pyrebase
from config import firebase_config

firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()


def sign_up(email, password):
    try:
        auth.create_user_with_email_and_password(email, password)
        return True
    except:
        return False

def login(email, password):
    try:
        auth.sign_in_with_email_and_password(email, password)
        return True
    except:
        return False

def logout():
    auth.current_user = None
    return True
