


# Overview

Follow the instruction below to setup your MongoDB connection

## *We suggest using MongoDB Atlas

Follow the instructions below to set up MongoDB Atlas

# **Set up MongoDB Atlas**

Atlas is MongoDB's cloud database service. It lets you host your databases for free up to a certain amount, and what's great about it is you don't need to input any credit card details at all to get started.

### **Creating a MongoDB Atlas Account**

Head over to https://www.mongodb.com/try to create your account. You'll then be taken to a page where you can enter your project details and your preferred language (JavaScript).

Next you'll be prompted to choose your cluster (a cluster is MongoDB's term to mean several servers working together to carry your data). Select the **free, Shared cluster** option. After, you can choose your settings for your starter cluster. Atlas provides 3 cloud platforms, all of which have free tiers. Choose **AWS** and select the recommended region, **N. Virginia (us-east-1)**.

Under Cluster Tier, select the **free, M0 Sandbox** tier. Then choose a name for your cluster or leave it as is, then create your cluster.

### **Creating a User**

It will take a few minutes to create your cluster, so in the meantime let's create a user. On the left-hand side navigation menu, click on **Database Access** then **Add New Database User**. Create a username and password, and remember to **note the password somewhere**, as you'll be needing it later to connect your database in your app.

Below that set your **Database User Privileges** to **Atlas Admin**, and finish creating your user.

### **Access**

Next, you'll need to whitelist your IP address so that you can access your cluster. Go to **Network Access** on the navigation menu, and **Add IP Address**. You can either **Add Your Current IP Address** or **Allow Access from Anywhere**. **Confirm** your choice.

For any projects deployed through Heroku, you'll have to select **Allow Access from Anywhere**. This is because Heroku uses Dynamic IPs. While this isn't the most secure option, it is fine for now.

### **Connecting Your Cluster to Your App**

Go to **Clusters** to view your newly-created cluster. Click on **Connect,** then **Connect Your Application**. Select **Node.js** as the driver and the version as **3.6 or later**. Copy the connection string and replace `<username>` and `<password>` with the user details you created earlier and `<dbname>` with a database name. It will look something like this:

`mongodb+srv://<username>:<password>@cluster0.mdy4n.mongodb.net/<dbname>?retryWrites=true&w=majority`

## Use the string in the mongoose.connect()!

*Installing MongoDB locally is not our suggested way but if you wish to try it the instructions are below.

### Local Install (Not Suggested Way)

# WSL Users: Please Read Before Continuing

Follow the instructions below the video for correctly installing MongoDB to your system.

# Lesson Video

https://www.youtube.com/watch?v=dEYVQWc4I1U&list=PL1whVIy6oz7PXKvf9ivEtmXbkR7-QOa0I&index=28&t=0s

# Installing MongoDB on WSL - 2022 Update

Instructions are copied from here: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb

To install MongoDB (version 5.0) on WSL (Ubuntu 20.04):

1. Open your WSL terminal (ie. Ubuntu) and go to your home directory: `cd ~`
    1. Update your Ubuntu packages: `sudo apt update`
    2. Import the public key used by the MongoDB package management system: `wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -`
    3. Create a list file for MongoDB: `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`
    4. Reload local package database: `sudo apt-get update`
    5. Install MongoDB packages: `sudo apt-get install -y mongodb-org`
    6. Confirm installation and get the version number: `mongod --version`
    7. Make a directory to store data: `mkdir -p ~/data/db`
    8. Run a Mongo instance: `sudo mongod --dbpath ~/data/db`
    9. Check to see that your MongoDB instance is running with: `ps -e | grep 'mongod'`
    10. To exit the MongoDB Shell, use the shortcut keys: Ctrl + C
        
        # Supplementary Content
        
        https://docs.mongodb.com/manual/administration/install-community/
        

# Next Up

‣