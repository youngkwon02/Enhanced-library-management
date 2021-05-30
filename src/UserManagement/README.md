# User Management 서브그룹 소스 폴더

## 작업 레포지토리
https://github.com/yulaseo/SWE-subgroup-usermanagement

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

7. There are already two guests and one feedback in the database.
   You can view the guests by searching with `210` parameter. (Because every guests have 210XXXXXXX userid.)