# CRUD API MINIMUM SPECIFICATION

## Create Object Items

Request :

- Method : POST
- Endpoint : `api/create<object>`
- Body :

```json
{
    "objectName": "string",
    "objectPrice": "number",
    "objectYear": "number",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

Response :

```json
// Success Response
{
    "success": true,
    "message": "Data <objectName> successfully created!"
}

// Error/Failed Response
{
    "success": false,
    "message": "Data <objectName> cannot be created!"
}
```

## Read All Items

Request :

- Method : GET
- Endpoint : `api/get<Object>`

Response :

```json
// Success Response
{
    "success": true,
    "data": "<objecItemtData>"
}

// Empty Success Response
{
    "success": true,
    "data": {
        "message": "Data is empty now, create a <object> to fill this db!"
    }
}

// Error/Failed Response
{
    "success": false,
    "message": "Data error, please troubleshoot!"
}
```

## Read Spesific Items

Request :

- Method : GET
- Endpoint : `api/get<Object>/:<objectItemName>`

Response :

```json
// Success Response
{
    "success": true,
    "data": "<objectItemData>"
}

// Cannot Found Response
{
    "success": false,
    "data": {
        "message": "Data <objectItemName> cannot be found!"
    }
}

// Error/Failed Response
{
    "success": false,
    "message": "Data error, please troubleshoot!"
}
```

## Update Items

Request :

- Method : PUT
- Endpoint : `api/update<Object>?<queryName>=<objectItemName>`
- Body :

```json
{
    "objectName": "string",
    "objectPrice": "number",
    "objectYear": "number",
    "updatedAt": "Date"
}
```

Response :

```json
// Success Response
{
    "success": true,
    "message": "Sucessfully update <objectItemName>!"
}

// Cannot Found Response
{
    "success": false,
    "data": {
        "message": "Data <objectItemName> cannot be found!"
    }
}

// Error/Failed Response
{
    "success": false,
    "message": "Data error, please troubleshoot!"
}
```

## Delete Items

Request :

- Method : DELETE
- Endpoint : `api/delete<Object>?<queryName>=<objectItemName>`

Response :

```json
// Success Response
{
    "success": true,
    "data": "Data <objectItemName> successfully deleted!"
}

// Cannot Found Response
{
    "success": false,
    "data": {
        "message": "Data <objectItemName> cannot be found!"
    }
}

// Error/Failed Response
{
    "success": false,
    "message": "Data error, please troubleshoot!"
}
```
