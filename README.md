# GDSC TCET Website

Made using ReactJS, Tailwind CSS and Material UI



## Executing

To run this project you need `nodejs`, `yarn` and `npm`(optional)

- Clone the repo
- Run `yarn`
- Run `yarn run start`

Incase you get errors while running the above commands, try using `npm`. If still there are issues, contact the team members on Discord.

In the `package.json` file the script  
`"build": "INLINE_RUNTIME_CHUNK=false react-scripts build"`  
has the `INLINE_RUNTIME_CHUNK=false` that's necessary for auto server deployment.  

To generate a local build, run the `build-local` script.

## Branches
- `master`: The main branch of the repo, this branch must be used for auto deplpyment. Never push any code to this branch. Always make PR from the stage branch. Merges should be done only by technical core members or any other authorized members.
- `stage`: This is the branch where all changes should be pushed. This branch can be auto deployed to test the changes made before pushing them to production
- `dev`: Any other changes that must be in VCS.

## Deployment

The master branch is setup for auto deploy, any changes commited to it will be auto pushed to server and will reflect in live.

The deployment time is `~200 secs` 

There is a GitHub Action setup that creates a build from the code and transfers the build files to server using FTP.

The GitHub Actions code file is on the `master` branch in the `.github/workflows/deployment.yml` file.

## Contributing

Contributions are always welcome!

Please discuss your contributions with the core members and open issues/tickets for the changes.

The bugfixes/features you want to contribute might be under development already, so it's better if any contribution is communicated

If we're looking for any contribution, we'll open issues accordingly, please keep checking them


## Thanks To

Thanks to [Harshit Daga](https://github.com/harshitdaga7) and [Ranveer Shah](https://github.com/Radon333) for the old website. The old repo is now archived and can be accessed [here](`https://github.com/DSC-TCET/Website`)