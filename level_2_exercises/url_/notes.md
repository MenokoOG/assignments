 // url lesson, menoko og, 1-21-24
 
 # URLs 
 - uniform resource locator

 -www.amazon.com/clothing

# Base Url
   - www.amazon.com
    
# Endpoint
    -/clothing/jackets/d7hajhbds888


# Parameter -requesting specific resources from a database (id)
    - /clothing/jackets/:_id
    -/clothing/jackets/d7hajhbds888
# Query (query strings)
-www.amazon.com/clothing/jackets?color=black&type=leather

?color=black&type=leather this is query

returns an object example:

const query = {
            color: black,
            type: leather
        }