from app.config import settings
import requests

def get_tube_status():
    url = "https://api.tfl.gov.uk/Line/Mode/tube/Status"
    params = {
        "app_key": settings.TFL_APP_KEY
    }
    response = requests.get(url, params=params)
    data = response.json()
    
    # Format each line's status
    formatted = []
    for line in data:
        status = line.get("lineStatuses", [{}])[0]
        formatted.append({
            "line": line.get("name"),
            "status": status.get("statusSeverityDescription", "Unknown"),
            "reason": status.get("reason", None)
        })
    
    return formatted