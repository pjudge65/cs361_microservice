# Currency Exchange Rate Microservice for Countries Application

Microservice that receives and returns a given country's Currency Exchange Rate from online API


## Communication Contract


### App Endpoints

* One GET route handler with endpoint "/"
  
## How to request data

1. Set up a free account at openexchangerates.org and set the given application id to the variable "app_id" in the get handler.
2. Send GET request to "/" endpoint with query parameter "code" where code is a valid 3-letter currency code.
  
Example Call

```
const response = await fetch(`http://localhost:8000?code=${countryCode}`);
const data = await response.json();
if (response.status === 200){
    exchangeDisplay.innerHTML = `EXCHANGE RATE OF DOLLARS TO ${countryCode}: ${data.exchange_rate}`;

}
```

In the example from the video, I used the "localhost:3000/currency" endpoint as a proxy for the "localhost:8000/" endpoint (where the microservice application is running)

## How to receive data

1. If using a fetch call as in the example, you will receive the exchange rate as a response to the GET call in an object, "data" in the example above.
2. To access the numerical value for the exchange rate, use data.exchange_rate, as above.



```


```
![Untitled](https://user-images.githubusercontent.com/19884734/218638297-1da1b633-7dae-495a-9e7d-83f2318e5861.jpg)
