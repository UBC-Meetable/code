# code
## Workflow
To ensure that we continue to maintain standards and prevent any breaking changes from being introduced to our system during development, please use the following workflow:

To add new features / fixes / documentation, 
- Checkout staging branch on your local environment (`git checkout staging`)
- Pull the latest changes (`git pull`)
- Checkout a new feature branch (`git checkout -b yourname/name-of-feature-branch`)
- Develop
- Stage your changes (`git add .`)
- Commit your changes (`git commit -m "brief description of feature/fix"`)
- Push your changes to your remote feature branch (`git push yourname/name-of-feature-branch`)
- Go to your feature branch on github and create a pull request

**Note:**
- DO NOT push to the staging branch directly. This is our dedicated branch to test our changes before release.
- DO NOT push to the master branch. This is our source of truth and must never be pushed to unless we are doing a release.
- PLEASE ensure you have atleast one approval and github action tests pass before merging your Pull Request to staging. The tests run automatically when you open a Pull Request.
