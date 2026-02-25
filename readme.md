
npx playwright test 

npx bddgen && npx playwright test --project=chromium --grep "@login"

npx bddgen --tags "@login" && npx playwright test --project=chromium --grep "@login"