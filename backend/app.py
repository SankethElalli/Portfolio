from flask import Flask, request
import time
import requests

app = Flask(__name__)

def get_location(ip):
    try:
        response = requests.get(f"https://ipinfo.io/{ip}/json")
        data = response.json()
        return f"{data.get('city', 'Unknown')}, {data.get('country', 'Unknown')}"
    except:
        return "Unknown"

@app.route('/track', methods=['GET'])
def track_visitor():
    visitor_ip = request.remote_addr if request.remote_addr != '127.0.0.1' else '8.8.8.8'  # Default for local testing
    location = get_location(visitor_ip)
    user_agent = request.headers.get('User-Agent')
    access_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

    log_entry = f"IP: {visitor_ip}, Location: {location}, Time: {access_time}, User-Agent: {user_agent}\n"

    with open('visitors.log', 'a') as log_file:
        log_file.write(log_entry)

    return "Visitor Tracked", 200

if __name__ == '__main__':
    app.run(debug=True)
