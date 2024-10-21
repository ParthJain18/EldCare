from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

from eldcare.auth.routes import *
from eldcare.schedule.routes import *
from eldcare.relations.routes import *
from eldcare.Chat.routes import *
from eldcare.location.routes import *

if __name__ == "__main__":
    app.run(debug=True)