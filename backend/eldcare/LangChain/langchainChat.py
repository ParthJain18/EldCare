from openai import OpenAI

def get_schedule_answer(userInput):
    client = OpenAI(api_key="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")

    schedule = """
        27-01-2024 (Today)
        8:00 AM - 9:00 AM: Breakfast
        9:00 AM - 10:00 AM: Exercise
        12:00 PM - 1:00 PM: Doctor's Appointment
        4:00 PM - 5:00 PM: Walk
        5:00 PM - 6:00 PM: Dinner

        28-01-2024 (Tommorrow)
        8:00 AM - 9:00 AM: Breakfast
        9:00 AM - 10:00 AM: Exercise
        """
    
    completion = client.chat.completions.create(

        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a nurse/ assistant for an elderly person. You need to be able to answer questions about the elderly person's schedule strictly from the schedule given below, such as What time is the appointment? or What is the appointment for? \n Today's date is 27-01-2024. \nIf there is no appointment today, you can say there is no appointment today. Don't make things up."},
            {"role": "assistant", "content": "Schedule is: \n" + schedule},
            {"role": "user", "content": userInput}
        ],
        temperature=0,
    )

    print(completion.choices[0].message.content)
    return completion.choices[0].message.content

def get_general_answer(userInput):
    client = OpenAI(api_key="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")
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