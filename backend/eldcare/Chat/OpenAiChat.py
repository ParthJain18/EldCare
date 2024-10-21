from openai import OpenAI
from config import firebase_config
from datetime import datetime
import pytz
import pyrebase
import dotenv

db = pyrebase.initialize_app(firebase_config).database()


OPEN_AI_KEY = dotenv.get_key('.env', 'OPEN_AI_KEY')

def get_schedule_answer(userInput, userId):
    client = OpenAI(api_key=OPEN_AI_KEY)
    # client = OpenAI()

    data = db.child("schedule").child(userId).get().val()

    events_by_date = {}

    schedule = ""
    for event in data.values():
        start_date = datetime.fromisoformat(event['startDate'].replace('Z', '+00:00'))
        end_date = datetime.fromisoformat(event['endDate'].replace('Z', '+00:00'))

        start_date = start_date.astimezone(pytz.timezone('US/Eastern'))
        end_date = end_date.astimezone(pytz.timezone('US/Eastern'))

        date_str = start_date.strftime('%d-%m-%Y')
        time_str = f"{start_date.strftime('%I:%M %p')} - {end_date.strftime('%I:%M %p')}"

        if date_str not in events_by_date:
            events_by_date[date_str] = []
        events_by_date[date_str].append(f"{time_str}: {event['title']}")

    for date, events in events_by_date.items():
        schedule += f"{date}\n"
        for event in events:
            schedule += f"{event}\n"
        schedule += "\n"

    print(schedule)
    
    completion = client.chat.completions.create(

        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a nurse/ assistant for an elderly person. You need to be able to answer questions about the elderly person's schedule strictly from the schedule given below, such as What time is the appointment? or What is the appointment for? \n Today's date is 28-01-2024. \nIf there is no appointment today, you can say there is no appointment today and that their schedule is free. Don't make things up. Be helpful and cheerful"},
            {"role": "assistant", "content": "Schedule is: \n" + schedule},
            {"role": "user", "content": userInput}
        ],
        temperature=0.2,
    )

    print(completion.choices[0].message.content)
    return completion.choices[0].message.content

def get_general_answer(userInput):
    client = OpenAI(api_key=OPEN_AI_KEY)
    completion = client.chat.completions.create(

        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a nurse/ assistant for an elderly person. You need to be able to answer questions about the elderly person's general questions cheerfully and factually. \nIf you don't know the answer, you can say you don't know. Don't make things up."},
            {"role": "user", "content": userInput}
        ],
        # temperature=0,
    )

    print(completion.choices[0].message.content)
    return completion.choices[0].message.content
# print(get_answer("When is my next appointment after todays?"))

# get_schedule_answer("When is my next appointment after todays?", "dxQ114IvBPb9ZEc1kLmOsvWcLiw2")

def set_reminder(input_text):
    client = OpenAI(api_key=OPEN_AI_KEY)
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "you have to help a computer function to set a reminder on a set time for a specific title that the user wants. So answer strictly in this example format: \n [startTime, endTime, title]\nor example:\n[2024-02-26T18:30:00.000Z, 2024-02-26T19:30:00.000Z, perform certain task]\n\n according to what the user intends to do. If he doesn't specify a time, try your best to guess it. Today's date and time is 2024-01-28T06:30:00.000Z"},
            {"role": "user", "content": input_text}
        ],
        temperature=0.1,
    )
    print("Reminder" + str(completion.choices[0].message.content))
    return completion.choices[0].message.content