
/*describe('Automation Test Store Tests', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
  });

  it('should display the logo', () => {
    cy.get('a.logo img[alt="Automation Test Store"]').should('be.visible');
  });

  it('should display the search bar and categories', () => {
    cy.get('div.btn-group.search-bar').should('be.visible');
    cy.get('input#filter_keyword').should('be.visible');
    cy.get('div.button-in-search').should('be.visible');

    // Trigger the dropdown if needed
    cy.get('input#filter_keyword').click();
    cy.get('ul#search-category').should('be.visible');
  });

  it('should display the featured products heading', () => {
    cy.get('h1.heading1').contains('Featured').should('be.visible');
    cy.get('h1.heading1').contains('See Our Most featured Products').should('be.visible');
  });

  it('should display the latest products heading', () => {
    cy.get('h1.heading1').contains('Latest Products').should('be.visible');
    cy.get('h1.heading1').contains('See New Products').should('be.visible');
  });

  it('should display the bestsellers text', () => {
    cy.get('span.maintext').contains('Bestsellers').should('be.visible');
  });

  it('should display the contact us heading', () => {
    cy.get('h2').contains('Contact Us').should('be.visible');
  });

  it('should display the category links', () => {
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').should('be.visible');
  });
  
  it('should display the social media icons', () => {
    cy.get('a.facebook').should('be.visible');
    cy.get('a.twitter').should('be.visible');
    cy.get('a.linkedin').should('be.visible');
  });

  it('should navigate to Apparel & accessories and verify images', () => {
    // Step 1: Click on the "Apparel & accessories" category link
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]')
      .click();

    // Step 2: Verify that the first image is visible
    cy.get('img[src="//automationteststore.com/image/thumbnails/18/77/new_ladies_red1_jpg-100216-120x120.jpg"]')
      .should('be.visible');

    // Step 3: Verify that the second image is visible
    cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-120x120.jpg"]')
      .should('be.visible');
  });
});*/
describe('Homepage Element Visibility Verification', () => {
  it('should load the homepage and verify that key elements are visible', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');

      // Verify that the homepage URL is correct
      cy.url().should('eq', 'https://automationteststore.com/');

      // Check that the logo image with title 'Automation Test Store' is visible
      cy.xpath("//img[@title='Automation Test Store']").should('be.visible');

      // Verify the 'Home' menu link with the class 'active menu_home' is visible
      cy.xpath("//a[@class='active menu_home']").should('be.visible');

      // Check that the block frame with ID 'block_frame_html_block_1775' is visible
      cy.get("div[id='block_frame_html_block_1775']").should('be.visible');

      // Verify that the 'menu_text' div is visible
      cy.get('div.btn-group.search-bar').should('be.visible');
      cy.get('input#filter_keyword').should('be.visible');
      cy.get('div.button-in-search').should('be.visible');

    // Trigger the dropdown if needed
      cy.get('input#filter_keyword').click();
      cy.get('ul#search-category').should('be.visible');
     

         cy.xpath("//h4[contains(text(),'Welcome to the Automation Test Store!')]")
          .should('be.visible')
          .and('contain.text', 'Welcome to the Automation Test Store!');

      // Verify that the block frame with ID 'block_frame_html_block_1776' is visible
      cy.get("div[id='block_frame_html_block_1776']").should('be.visible');

      // Check that the h2 element inside the block frame contains the expected text
      cy.get("div[id='block_frame_html_block_1776'] h2").should('be.visible').and('contain.text', 'Contact Us');

      
  });
  it('should display the social media icons', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a.facebook').should('be.visible');
    cy.get('a.twitter').should('be.visible');
    cy.get('a.linkedin').should('be.visible');
  });


  it('should display the category links', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').should('be.visible');
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').should('be.visible');
  });
  
  
  
  it('should navigate to a category, verify elements, check images, and navigate back', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');

      // Click on a specific category (e.g., Apparel & Accessories)
      cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=68']").click();

      // Verify the 'Shoes' link is visible and click on it
      cy.xpath("//a[normalize-space()='Shoes']").should('be.visible').click();

      // Verify that the first product image is visible on the Shoes page
      cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');

      // Go back to the previous page
      cy.go('back');

      // Click on the second product (use the provided CSS selector)
      cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > a:nth-child(1)').click();

      // Verify that the image on the new product page is visible
      cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');

});

});

/*describe('Product Category Navigation and Image Verification', () => {
  it('should navigate to a category, verify elements, check images, and navigate back', () => {
      // Visit the Automation Test Store homepage
      cy.visit('https://automationteststore.com/');

      // Click on a specific category (e.g., Apparel & Accessories)
      cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=68']").click();

      // Verify the 'Shoes' link is visible and click on it
      cy.xpath("//a[normalize-space()='Shoes']").should('be.visible').click();

      // Verify that the first product image is visible on the Shoes page
      cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');

      // Go back to the previous page
      cy.go('back');

      // Click on the second product (use the provided CSS selector)
      cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > a:nth-child(1)').click();

      // Verify that the image on the new product page is visible
      cy.xpath("//div[@class='contentpanel']//div[1]//div[2]//a[1]//img[1]").should('be.visible');
  });
});*/

