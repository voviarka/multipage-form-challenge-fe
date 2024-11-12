import { test, expect } from '@playwright/test';

test.describe('Name Page', () => {
  test('should have title', async ({ page }) => {
    await page.goto('/name');
    await expect(page).toHaveTitle('Vite + React + TS');
  });

  test('should have "required" validation on the first name and last inputs', async ({
    page,
  }) => {
    await page.goto('/name');

    await page.click('button:has-text("Next")');

    await expect(page.getByText('firstName is required')).toBeVisible();
    await expect(page.getByText('lastName is required')).toBeVisible();
    await expect(page.locator("[name='firstName']")).toHaveClass(
      /border-red-600/,
    );
    await expect(page.locator("[name='lastName']")).toHaveClass(
      /border-red-600/,
    );
  });

  test('should navigate to the "/email" page after click on Next button(all inputs are filled in)', async ({
    page,
  }) => {
    await page.goto('/name');

    await page.locator("[name='firstName']").fill('John');
    await page.locator("[name='lastName']").fill('Doe');
    await page.click('button:has-text("Next")');

    await expect(page).toHaveURL('/email');
  });
});

test.describe('Email Page', () => {
  test('should have "required" validation on the email inputs', async ({
    page,
  }) => {
    await page.goto('/email');

    await page.click('button:has-text("Next")');

    await expect(page.getByText('email is required')).toBeVisible();
    await expect(page.locator("[name='email']")).toHaveClass(/border-red-600/);
  });

  test('should validate an email format on the email inputs', async ({
    page,
  }) => {
    await page.goto('/email');

    await page.locator("[name='email']").fill('12345');
    await page.click('button:has-text("Next")');

    await expect(page.getByText('Invalid email address format')).toBeVisible();
    await expect(page.locator("[name='email']")).toHaveClass(/border-red-600/);
  });

  test('should navigate to the "/phone" page after click on Next button(email input is filled in)', async ({
    page,
  }) => {
    await page.goto('/email');

    await page.locator("[name='email']").fill('john.doe@example.com');
    await page.click('button:has-text("Next")');

    await expect(page).toHaveURL('/phone');
  });
});

test.describe('Phone Page', () => {
  test('should have "required" validation on the phone inputs', async ({
    page,
  }) => {
    await page.goto('/phone');

    await page.click('button:has-text("Next")');

    await expect(page.getByText('phone is required')).toBeVisible();
    await expect(page.locator("[name='phone']")).toHaveClass(/border-red-600/);
  });

  test('should have validation message when entered less than 14 symbols', async ({
    page,
  }) => {
    await page.goto('/phone');

    await page.locator("[name='phone']").fill('123456');
    await page.click('button:has-text("Next")');

    await expect(
      page.getByText('phone cannot be less than 14 symbols'),
    ).toBeVisible();
    await expect(page.locator("[name='phone']")).toHaveClass(/border-red-600/);
  });

  test('should have validation message when entered more than 14 symbols', async ({
    page,
  }) => {
    await page.goto('/phone');

    await page.locator("[name='phone']").fill('12345678901234567');
    await page.click('button:has-text("Next")');

    await expect(
      page.getByText('phone cannot exceed 14 symbols'),
    ).toBeVisible();
    await expect(page.locator("[name='phone']")).toHaveClass(/border-red-600/);
  });

  test('should have validation message when entered 14 symbols, but format is incorrect', async ({
    page,
  }) => {
    await page.goto('/phone');

    await page.locator("[name='phone']").fill('12345678901234');
    await page.click('button:has-text("Next")');

    await expect(
      page.getByText(
        'Invalid phone number format. It should follow the pattern: +4912345678910',
      ),
    ).toBeVisible();
    await expect(page.locator("[name='phone']")).toHaveClass(/border-red-600/);
  });

  test('should navigate to the "/salary-indication" page after click on Next button(phone input is filled in)', async ({
    page,
  }) => {
    await page.goto('/phone');

    await page.locator("[name='phone']").fill('+4912345678901');
    await page.click('button:has-text("Next")');

    await expect(page).toHaveURL('/salary-indication');
  });
});

test.describe('Salary Indication Page', () => {
  test('should have "required" validation when no salary selected', async ({
    page,
  }) => {
    await page.goto('/salary-indication');

    await page.click('button:has-text("Next")');

    await expect(page.getByText('salary is required')).toBeVisible();
  });

  test('should navigate to the "/summary" page after click on Next button(salary radio is selected)', async ({
    page,
  }) => {
    await page.goto('/salary-indication');

    await page.locator("[value='0 - 1.000']").click();
    await page.click('button:has-text("Next")');

    await expect(page).toHaveURL('/summary');
  });
});

test.describe('Summary Page', () => {
  test('should save all data to the server)', async ({ page }) => {
    await page.goto('/name');

    await page.locator("[name='firstName']").fill('John');
    await page.locator("[name='lastName']").fill('Doe');
    await page.click('button:has-text("Next")');

    await page.locator("[name='email']").fill('john.doe@example.com');
    await page.click('button:has-text("Next")');

    await page.locator("[name='phone']").fill('+4912345678901');
    await page.click('button:has-text("Next")');

    await page.locator("[value='0 - 1.000']").click();
    await page.click('button:has-text("Next")');

    await expect(page).toHaveURL('/summary');

    let requestData: any = null;
    page.on('request', (request) => {
      if (request.url().includes('https://domain.com/api/feedback')) {
        requestData = request.postDataJSON();
      }
    });

    await page.click('button:has-text("Submit")');

    expect(requestData).not.toBeNull();
    // expect to save request to the server
    expect(requestData).toMatchObject({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+4912345678901',
      salary: '0 - 1.000',
    });
  });
});
