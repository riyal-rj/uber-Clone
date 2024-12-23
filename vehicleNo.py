import random
import string

indian_state_codes = [
    "AP", "AR", "AS", "BR", "CG", "GA", "GJ", "HR", "HP", "JH", "KA", "KL", "MP", "MH", "MN", "ML", "MZ", "NL", "OD", "PB", "RJ", "SK", "TN", "TS", "TR", "UP", "UK", "WB"
]

def generate_vehicle_number():
    state_code = random.choice(indian_state_codes)
    district_code = ''.join(random.choices(string.digits, k=2))
    unique_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    return f"{state_code}{district_code} {unique_code}"

vehicle_number = generate_vehicle_number()
print(f"Vehicle Number: {vehicle_number}")