import requests
import time


def test_flow():
    quizInstance = requests.post('http://localhost:4000/api/quizs', {'number' : 1})



def main():
    while True:
        time.sleep(2)

if __name__ == '__main__':
    main()