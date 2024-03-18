import { PriceOption } from "../components/PriceOption/PriceOption"

export const PriceOptions = () => {
const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Limited access to group classes"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to all group classes",
              "One complimentary personal training session per month"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to all group classes",
              "Unlimited personal training sessions",
              "Access to sauna and spa facilities"
            ]
          },
          {
            "id": 4,
            "name": "Student Membership",
            "price": 24.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Limited access to group classes (with valid student ID)"
            ]
          },
          {
            "id": 5,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to all group classes",
              "Discounted rates for family members",
              "One complimentary family training session per month"
            ]
          },
          {
            "id": 6,
            "name": "Corporate Membership",
            "price": 69.99,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Access to all group classes",
              "Special rates for employees of registered companies",
              "Exclusive corporate events and workshops"
            ]
          }    
]
    
  return (
    <div>
       <h1 className="text-7xl py-10">Our Best price</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
         }
        </div>
        </div>
  )
}
