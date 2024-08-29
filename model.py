from flask import Flask, jsonify, request
import pandas as pd
import numpy as np

app = Flask(__name__)

# Set seed for reproducibility
np.random.seed(42)

# Step 1: Generating Dummy Data
teacher_ids = [f'TID{i+1}' for i in range(100)]  # Assuming IDs are like 'TID1', 'TID2', etc.
teacher_names = [f'Teacher{i+1}' for i in range(100)]
research_papers = np.random.randint(5, 20, size=100)  # Random number of research papers between 5 and 20
attendance = np.random.randint(75, 100, size=100)  # Random attendance percentage between 75% and 100%
seminars_attended = np.random.randint(1, 10, size=100)  # Random number of seminars attended between 1 and 10
patents = np.random.randint(0, 5, size=100)  # Random number of patents between 0 and 5
consultancy = np.random.randint(0, 10, size=100)  # Random number of consultancy projects between 0 and 10
publications = np.random.randint(10, 50, size=100)  # Random number of publications between 10 and 50

# Create a DataFrame
data = {
    'Teacher_ID': teacher_ids,
    'Teacher': teacher_names,
    'Research_Papers': research_papers,
    'Attendance': attendance,
    'Seminars_Attended': seminars_attended,
    'Patents': patents,
    'Consultancy': consultancy,
    'Publications': publications
}
df = pd.DataFrame(data)

# Step 2: Calculate Median
median_values = df[['Research_Papers', 'Attendance', 'Seminars_Attended', 'Patents', 'Consultancy', 'Publications']].median()

# Step 3: Track Progress
df['Above_Median_Research'] = df['Research_Papers'] > median_values['Research_Papers']
df['Above_Median_Attendance'] = df['Attendance'] > median_values['Attendance']
df['Above_Median_Seminars'] = df['Seminars_Attended'] > median_values['Seminars_Attended']
df['Above_Median_Patents'] = df['Patents'] > median_values['Patents']
df['Above_Median_Consultancy'] = df['Consultancy'] > median_values['Consultancy']
df['Above_Median_Publications'] = df['Publications'] > median_values['Publications']

# Step 4: API to get teacher data and compare with median values by ID
@app.route('/teacher/<teacher_id>', methods=['GET'])
def get_teacher_data(teacher_id):
    teacher_data = df[df['Teacher_ID'] == teacher_id]
    
    if teacher_data.empty:
        return jsonify({'error': 'Teacher not found'}), 404
    
    teacher_data = teacher_data.iloc[0]
    
    comparison = {
        'Metric': ['Research Papers', 'Attendance', 'Seminars Attended', 'Patents', 'Consultancy', 'Publications'],
        'Selected_Teacher': [
            int(teacher_data['Research_Papers']),
            int(teacher_data['Attendance']),
            int(teacher_data['Seminars_Attended']),
            int(teacher_data['Patents']),
            int(teacher_data['Consultancy']),
            int(teacher_data['Publications'])
        ],
        'Median': [
            int(median_values['Research_Papers']),
            int(median_values['Attendance']),
            int(median_values['Seminars_Attended']),
            int(median_values['Patents']),
            int(median_values['Consultancy']),
            int(median_values['Publications'])
        ]
    }

    return jsonify(comparison)

# Step 5: API to get the overall summary
@app.route('/summary', methods=['GET'])
def get_overall_summary():
    overall_summary = {
        'Metric': ['Average Research Papers', 'Average Attendance', 'Average Seminars Attended', 'Average Patents', 'Average Consultancy', 'Average Publications'],
        'Value': [
            float(df['Research_Papers'].mean()),
            float(df['Attendance'].mean()),
            float(df['Seminars_Attended'].mean()),
            float(df['Patents'].mean()),
            float(df['Consultancy'].mean()),
            float(df['Publications'].mean())
        ]
    }

    return jsonify(overall_summary)

# Step 6: API to add a new teacher
@app.route('/teacher', methods=['POST'])
def add_teacher():
    new_teacher_data = request.json
    
    # Validate the incoming data
    required_fields = ['Teacher_ID', 'Teacher', 'Research_Papers', 'Attendance', 'Seminars_Attended', 'Patents', 'Consultancy', 'Publications']
    for field in required_fields:
        if field not in new_teacher_data:
            return jsonify({'error': f'Missing field: {field}'}), 400

    # Add the new teacher to the DataFrame
    new_teacher = {
        'Teacher_ID': new_teacher_data['Teacher_ID'],
        'Teacher': new_teacher_data['Teacher'],
        'Research_Papers': int(new_teacher_data['Research_Papers']),
        'Attendance': int(new_teacher_data['Attendance']),
        'Seminars_Attended': int(new_teacher_data['Seminars_Attended']),
        'Patents': int(new_teacher_data['Patents']),
        'Consultancy': int(new_teacher_data['Consultancy']),
        'Publications': int(new_teacher_data['Publications'])
    }
    
    global df  # To modify the global DataFrame
    new_df = pd.DataFrame([new_teacher])
    df = pd.concat([df, new_df], ignore_index=True)
    
    # Recalculate median values
    global median_values
    median_values = df[['Research_Papers', 'Attendance', 'Seminars_Attended', 'Patents', 'Consultancy', 'Publications']].median()
    
    return jsonify({'message': 'Teacher added successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
