# :monkey: Mailchimp Synchronizer

![node](https://img.shields.io/badge/node-19.5.0-green.svg)
![typescript](https://img.shields.io/badge/typescript-4.9.4-blue.svg)
![express](https://img.shields.io/badge/express-4.18.2-red.svg)

An API dedicated to syncs contacts from Trio's MockAPI to Mailchimp.

## :clipboard: Endpoints table

URLs are:

- **DEV https://lorem.development**
- **STG https://lorem.staging**
- **PRD https://lorem**

You'll find the endpoints methods, paths and description in the section bellow.

| Method   | Path             | Description                       |
|----------|------------------|-----------------------------------|
| `GET`    | `/contacts/sync` | [Syncs contacts](#syncs-contacts) |

## :sparkles: Endpoints glossary

### <a name="syncs-contacts"></a> **`[GET]` Syncs contacts `/contacts/sync`**

#### **BODY PARAMS** `None`

#### **PATH PARAMS** `None`

#### **QUERY PARAMS** `None`

#### **SUCCESS RESPONSE**

**Code** `HTTP 200 OK`
```json
{
    "syncedContacts": 1,
    "contacts": [
        {
            "firstName": "string",
            "lastName": "string",
            "email": "string"
        }
    ]
}
```
