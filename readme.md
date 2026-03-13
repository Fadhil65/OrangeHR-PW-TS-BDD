
npx playwright test 

npx bddgen && npx playwright test --project=chromium --grep "@login"

npx bddgen --tags "@login" && npx playwright test --project=chromium --grep "@login"

npx allure generate allure-results --clean -o allure-report generate allure local