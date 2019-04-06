import bs4
import re
import json
from random import choice

def pprint(soup):
    print(soup.prettify())

def remove_pad(string):
    return re.sub(r"^\s*", "", re.sub("\s*$", "", string))

def scrape_title(event):
    """extracts the title from an event"""
    return remove_pad(event.find("span", attrs={"class": "_50f7"}).text)

def scrape_time(event):
    """extracts the time from an event"""
    return remove_pad(event.find("div", attrs={"class": "_4dml"}).find("span", attrs={"class": ""}).text)

def scrape_location(event):
    """extracts the location from an event"""
    return remove_pad(event.find("div", attrs={"class": "_30n-"}).text)

def scrape_date(event):
    month = remove_pad(event.find("span").find("span", attrs={"class": "_5a4-"}).text)
    day   = remove_pad(event.find("span").find("span", attrs={"class": "_5a4z"}).text)
    return " ".join([month, day])

def scrape_campus(event):
    """extracts the campus from the event"""
    location = remove_pad(event.find("div", attrs={"class": "_30n-"}).text)
    if re.findall(r"clayton", location.lower()):
        return "Clayton"
    elif re.findall(r"caulfield", location.lower()):
        return "Caulfield"
    else:
        return choice([ "Clayton", "Caulfield" ])


def event_dict(event):
    return {
        "title": scrape_title(event),
        "time": scrape_time(event),
        "date": scrape_date(event),
        "location": scrape_location(event),
        "campus": scrape_campus(event)
    }
    
if __name__ == "__main__":
    soup = bs4.BeautifulSoup(open("data.html"), features="lxml")
    # print(soup)
    raw_events = soup.findAll("div", attrs={"class": "_24er"})
    json.dump([event_dict(ev) for ev in raw_events], open("data.json", "w"))
    # print(raw_events[0])
    # print(raw_events[0].find("span"))
    # print(raw_events[0].find("span").find("span", attrs={"class": "_5a4-"}))
    # print(raw_events[0].find("span"))
    # print(raw_events[0].find("span"))
    # print(scrape_date(raw_events[0]))
    # print(scrape_title(raw_events[0]))
    # print(event_dict(raw_events[0]))
