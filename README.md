# danaMcivorProject1

Winter 2 Project 1 Group Style Developer Guidelines

Creative


Naming convention: camelCase 🐫

When targeting multiple selectors on CSS, have them on separate lines:
Example:
selector1, 
selector2, 
selector3, 
selector4 {
	property: value;
  property: value;
}

Partials:
●	setup 
●	variables 
●	mixins 
●	general 
●	header 
●	main (can be further broken down into homePage, blogPage, contactPage)
●	footer
●	mediaQueries

Color property: Hex and rgba for transparency - #UPPERCASE (ex: #FFF, #FFFFFF)

Commenting guidelines:
Good Example:
/* hello this is a comment haha */ 
selector { 
font-size: 2rem;
background: #555;
color: #000;
}
No comments in the middle of a CSS block


Not Recommended:
selector { 
font-size: 2rem;
/* hello this is a comment haha */
background: #555;
color: #000;
}

Major Breakpoints (feel free to add more in between as needed):
●	940px
●	768px
●	480px

Hover: Strikethrough

Wrapper:
●	Max-width: 1200px
●	Width: 80% (90% for mobile is acceptable)
