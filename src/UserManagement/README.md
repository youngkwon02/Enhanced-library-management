# User Management 서브그룹 소스 폴더

## 작업 레포지토리
https://github.com/yulaseo/SWE-subgroup-usermanagement

## Contributor
 
|    Name    | Feature                                        |
| :-----------: | :------------------------------------------------- |
|    <a href="https://github.com/yulaseo/SWE-subgroup-usermanagement/commits?author=youngkwon02">김영권</a>     |UC-01 (Log in & Token management)<br/> UC-14 (Add guest)<br/> UC-20 (Send feedback) | 
|    <a href="https://github.com/yulaseo/SWE-subgroup-usermanagement/commits/main?author=yulaseo">서율아</a>     |UC-02 (Log out)<br/> UC-15 (Guest search)<br/> UC-18 (Check feedback)|

---

## 실행 방법

1. Clone the repository:
```sh
git clone https://github.com/2021-caucse-software-engineering/enhanced-library-management.git
cd enhanced-library-management/src/UserManagement/
```

2. Create a virtual environment:
```sh
python -m venv venv
venv/Scripts/activate
```

3. Install the dependencies:
```sh
pip install -r requirements.txt
```

4. Run the local server:
```sh
cd usermanagement
python manage.py runserver
```

5. Navigate to `http://localhost:8000/guest/search`

6. You can login with id `2100000000` and password `1234` to use all services.

7. There are already two guests and one feedback in the database.<br/>
   You can view the guests by searching with `210000`. (Because all guest id is start with 210000 if it's created in 2021)
