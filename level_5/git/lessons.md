# Git Collaboration

* ### git branch
* ### git checkout
* ### git merge


# Start the Repo, clone master- this is setup by one person
## 1. Create git repo on gitHub
## 2. Connect/clone locally
## 3. Set up the code base including dependencies, etc....
* ### git add -a
* ### git commit -m "initial commit"
* ### git push 

 ## 4. clone repo - for the rest of team
* ### git clone - repo to work in

# NEVER CODE on MASTER

## 5. create a feature branch-
* ### git branch - ie..server-setup
## 6. Checkout to that branch
* ### git checkout server-setup
# now in local branch
## 7. commit and push branch to git Hub
* ### git add -a
* ### git commit -m "initial commit"
* ### git push 
## 8. git checkout master
## 9. Pull down remote master
* ### git pull
## 10. checkout back to local branch
* ### git checkout server-setup
## 11. Merge local master into local branch
* ### git merge --no-ff master
*   ### -yaaaay, things went well
    ### -shift + ZZ 
* ###  if goes bad
    ### -look for conflicts in files and resolved
## 12. push branch to github
* ### git add -a
* ### git commit -m "initial commit"
* ### git push 

## 13. Create PR on gitHub
* ### pull request

## 14. locally git check out to master and git pull







