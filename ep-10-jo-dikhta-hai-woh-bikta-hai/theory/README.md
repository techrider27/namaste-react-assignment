# Explore all the ways of writing css
The different ways of writing css are as follows:-

1. Inline CSS - It is written inside the html element with style attribute.
`<h2 style="font-weight:800;color:#000;">Namaste React Ep 10 Assignment</h2>`

2. Internal CSS - It is written inside `<style> *CSS*  </style` tag inside `<head></head>`.
```
<head>
<style>
h2{
    font-weight:800;
    color:#000;
}
</style>
</head>
``` 

3. External CSS - In this method we keep separate css file and we link it in our HTML page.
```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React Ep 10</title>
</head>
<body>
    <h1 class="heading"></h1>
</body>
</html>
```
```
<!-- style.css -->
.heading{
    font-weight:800;
    color:#000;
}
```
Above mentioned are the traditional ways of writing CSS if we go beyond that thera are multiple CSS frameworks & libraries present in the industry. They are Bootstrap, TailwindCSS, Material UI, Ant Design.

# How do we configure tailwind?
As our bundler is Parcel we can choose install tailwind CSS with parcel from the tailwindcss website
1. Start your project
2. Install Tailwind CSS - We have to install tailwindcss/postcss
3. Configure postcss
4. Import tailwindcss to our stylesheet
5. And we are ready with our tailwindcss setup

# In tailwind.config.js, what does all the keys mean (content, theme, extend,)?
content - It helps the tailwind scan the classnames which we will be using in our project
theme - It is kind of default colours, typography, etc
extend - It is used to override our custom css classes which could clash with the tailwind's default css

# Why do we have .postcssrc file?
To know more about .postcssrc file first we have to learn few things about postcss, it is a tool that processes our styles using Javascript plugins. Therefore, .postcssrc file is a configuration file that tells postcss which plugins to load and their order


