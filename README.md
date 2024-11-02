# React project 

# Parcel
- Dev build 
- Local Server 
- HMR = Hot Module Reload 
- File Watching algorithm = written in C++
- Caching = faster Builds
- Image optimization
- Minification
- Bundling 
- Compress
- Consisten Hashing 
- Code Splitting 
- Error Handling 
- Tree Shaking = remove unused code 

# Food App Wireframe 
    * Header 
        - Logo 
        - Nav Bar
    * Body 
        - Search 
        - RestaurantContainer
        - RestaurantCard
            - Img
            - Name of Res, Rating, Cuisine, ETA
    * Footer 
        - Copyright
        - Links
        - Address
        - Contact


Two types of Export/Import 
    - Default Export/ Import 
        - export default Component;
        import Component from "./Path"

    - Named export/Import 
        - export const Components;
        - import {Components} from "./Path"

Life cycle methods on React
    - Mount 
    - Update
    - Unmount

Sequence Life Cycle of React with single child 
    - Parent Constructor
    - Parent Render 
    - Child Constructor
    - Child Render
    - Child Did Mount
    - Parent Did Mount

Sequence React life cycle with multiple children (2 children) 
    - Parent constructor
    - Parent Render
    - Child1 constructor 
    - Child1 Render
    - Child 2 constructor
    - Child 2 Render
    
    <DOM updated>

    - Child 1 Did mount
    - Child 2 did mount
    - Parent did mount

# Redux Toolkit (RTK)
    - Install Redux Tookit 
    - we have 2 libraries 
        1) reduxjs/toolkit
        2) react-redux
    - Build our Store 
    - Connect our store to our app
    - we will create a cart slice
    - We will dispatch an action.
    - Selector to read the new data
    
