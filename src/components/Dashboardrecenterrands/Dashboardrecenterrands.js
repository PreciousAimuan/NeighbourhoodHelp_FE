// YourMainComponent.js
import React from "react";
import Container from "./Container";

function Dashboardrecenterrands() {
  return (
    <Container
      preDivImage="your_image_url"
      preDivText="Recent Errands"
      cardsData={[
        {
          calendarIconUrl: "calender_icon_url",
          date: "March 17, 2024 - 2:00pm",
          deleteIconUrl: "delete_icon_url",
          leftContent: {
            name: "Lastname Firstname",
            phone: "+234 1234567890",
            iconUrl: "yellow_icon_url",
          },
          rightContent: {
            name: "Lastname Firstname",
            phone: "+234 1234567890",
            iconUrl: "yellow_icon_url",
          },
          addressIconUrl: "address_icon_url",
          address: "132, Main-Street, Osapa",
        },
        {
          calendarIconUrl: "calender_icon_url",
          date: "March 18, 2024 - 3:00pm",
          deleteIconUrl: "delete_icon_url",
          leftContent: {
            name: "Another Lastname",
            phone: "+234 9876543210",
            iconUrl: "yellow_icon_url",
          },
          rightContent: {
            name: "Another Firstname",
            phone: "+234 9876543210",
            iconUrl: "yellow_icon_url",
          },
          addressIconUrl: "address_icon_url",
          address: "456, Second-Street, Lekki",
        },
        {
          calendarIconUrl: "calender_icon_url",
          date: "March 19, 2024 - 4:00pm",
          deleteIconUrl: "delete_icon_url",
          leftContent: {
            name: "Thirdname Lastname",
            phone: "+234 5678901234",
            iconUrl: "yellow_icon_url",
          },
          rightContent: {
            name: "Thirdname Firstname",
            phone: "+234 5678901234",
            iconUrl: "yellow_icon_url",
          },
          addressIconUrl: "address_icon_url",
          address: "789, Third-Street, Victoria",
        },
        // Add more card data objects as needed
      ]}
    />
  );
}

export default Dashboardrecenterrands;
