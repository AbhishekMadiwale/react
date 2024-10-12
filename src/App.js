import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaunrantMenu from "./components/RestaurantMenu";

// const resObj = {
//     "card": {
//         "card": {
//             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//             "info": {
//                 "id": "167674",
//                 "name": "Easybites By Empire",
//                 "cloudinaryImageId": "67aa20d5bff8c2d59a5ebd3e700daa25",
//                 "locality": "Koramangala",
//                 "areaName": "Koramangala",
//                 "costForTwo": "₹200 for two",
//                 "cuisines": [
//                     "Snacks",
//                     "Fast Food",
//                     "Beverages"
//                 ],
//                 "avgRating": 4.3,
//                 "parentId": "443171",
//                 "avgRatingString": "4.3",
//                 "totalRatingsString": "4.0K+",
//                 "promoted": true,
//                 "adTrackingId": "cid=18840365~p=0~adgrpid=18840365#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=167674~eid=7c5283cb-dbba-4e54-b9ee-77e59d73db0f~srvts=1727091080477~collid=83637",
//                 "sla": {
//                     "deliveryTime": 30,
//                     "lastMileTravel": 1.3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "1.3 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-09-24 02:45:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                         "imageBased": {},
//                         "textExtendedBadges": {},
//                         "textBased": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "10% OFF",
//                     "subHeader": "UPTO ₹40"
//                 },
//                 "orderabilityCommunication": {
//                     "title": {},
//                     "subTitle": {},
//                     "message": {},
//                     "customIcon": {}
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                         "lottie": {},
//                         "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {},
//                 "externalRatings": {
//                     "aggregatedRating": {
//                         "rating": "3.5",
//                         "ratingCount": "151"
//                     },
//                     "source": "GOOGLE",
//                     "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                 },
//                 "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//                 "campaignId": "18840365"
//             },
//             "analytics": {},
//             "cta": {
//                 "link": "swiggy://menu?restaurant_id=167674&source=collection&query=Burger",
//                 "text": "RESTAURANT_MENU",
//                 "type": "DEEPLINK"
//             },
//             "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//         },
//         "relevance": {
//             "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//             "sectionId": "MENU_RETURN_FOOD"
//         }
//     }
// }

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaunrantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

// JSX = is not HTML in JS.
// Syntax of JSX is like HTML

// React Element
// const Title = () => (
//     <h1>
//         you are seeing now JSX
//     </h1>
// )
// React Component
// Types of classes - 1) Class base component and 2nd Functional based components

// Functional component is nothing but a JS function
// Component Composition = component inside another component
// const HeadingComponent = () => (
//     <div>
//         <Title/>
//         <h1>Functional component</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
// root.render(<HeadingComponent />)
