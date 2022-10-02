# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Steps to Contribute.
1. Find an issue
   >**Note**
   >If you find an issue you can request to assign it or you can create a new issue and request assignment.
2. First fork this repository, so that a copy of this repository is added to your repository, due to which the changes you make to 
the project won't affect the original repository. 
3. Next you have to open clone the website using [GIT](#git-guide) or [VS-Code](#vsc-guide)
4. Work on the issue that is assigned to you.
5. Make changes and then do a pull request.
6. Update the fork with sync'
7. Merge your branch into our master branch.

## Running the project.
* In order to run the project, please look into [Read.me](https://github.com/DSC-TCET/gdsc-tcet-website/blob/master/README.md) file.

## GIT guide
- Install [Git](https://gitforwindows.org/)
- Then you have to open git bash at that location where you will work on the project.
- You can follow the [Tutorial](https://youtu.be/apGV9Kg7ics) for more on git.

## VSC guide
- To Use Git in Vsc you have to open the command pallet ```(Ctrl+Shift+P)```
- Then you run the command ``Git clone`` after that you have to give link to your repository that you have forked.
- To find where is the link just go to your forked repositry and then you will see ```Code``` button above the list of files just toggle that and you'll get https link and ssh link to your reposiory. Copy the HTTP link address.
- Paste that link into VSCode and run that command, a clone of all the files will get created in your local file where you have given the location.
- Create a new branch using ```git checkout -b <branchname>```. 
- Work on the issue and then you might see git icon on the left where there are extensions and other resources. Click that icon 
- Then after completion you have to stage the changes. To stage the changes you will se ```+``` beside each file you can individually add the ```unstaged files``` to the ```staging area```. To add multiple files ```stage all files``` and then the will go in staging area. 
- Next you have to commit the files in order to do so write a commit message like ```Updated the Readme.md file``` (Note:- This message should reflect what you did like addition, updation or deletion of file. This message should be sensible). Commit the files and then follow [Pull request process](#pull-request-process)

## Pull Request Process

1. Add the relevant information what you have changed give a relevent heading for the PR too.
2. While making a Pull Request you have to request for review.
3. Wait till your Pull Request is reviewed by maintaiers.

Making a good pull request
--------------------------

Following these guidelines will increase the likelihood of your pull request being accepted:

1.  Before pushing your PR to the repository, make sure that it builds perfectly fine on your local system.
2.  Add enough information, like a meaningful title, the reason why you made the commit and a link to the issue page if you opened one for this PR.
3.  Scope your PR to one issue. Before submitting, make sure the diff contains no unrelated changes. If you want to cover more than one issue, submit your changes for each as separate pull requests.
4.  If you have added new functionality, you should update/create the relevant documentation.
5.  Try not to include "oops" commits - ones that just fix an error in the previous commit. If you have those, then before submitting [squash](http://git-scm.com/book/en/Git-Tools-Rewriting-History#Squashing-Commits) those fixes directly into the commits where they belong.
6.  Make sure to choose the right base branch and to follow the [[Coding_Style_Guide]] for your code.
7.  Please do not add extra images or videos, if some of existing media files are suitable.

Happy End
---------

1. As soon as the reviewer is fine with the pull request, the maintainers will merge your pull request.
2. The last, but not least, Happy Coding :D
