### Difficulties or challenges during development
The main difficulty face was getting use to implementing the different git commands at initial stage of the project and also remembering to add commit messages.
However this challenge eased with time by ensuring that industry standards are followed and making refences to relevant support documents and project terms of reference.

## Complying with organization requirement.
Having done a market reasearch on version control systems (VCS) before project kick off, I was able to meet all requirements by choosing the 'best' VSC tool in the market
that allaowed me to seamlessly implement and meeat all agreed project objectives and terms of reference. The organisation requirement include using a distributed VCS that most developers can use with good suuport online, creating branches for all development work before merging to the main branch, that industry standard must be followed in writing commit messages, authors's name must be reflected on eain repositotc. the Git vcs has all these functionalities as such compliance was followed in the development process. 

## Verification of VCS performance.
For every git command executed, it was ensured that the expected action reflected in the repository.

A branch was created from the main repository to ensure that original files changes can be tracked and different workers can work on the same file. This was done using the **"git branch new-branch-name"** command. 
Afterwards, **"git checkout new-branch-name"** was executed to make sure that changes commited are under the "new-branch-name" branch instead of on the main branch. Changes made to any file were monitored using the **"git status"** command  and the **"git add filename.ext"** command was used to stage the file to make it ready for a commit. Once the **"git commit"** was applied and the created branch repository was physical checked to verify that the committed changes reflect in all the files worked on. Once i was happy with all the changes and commits made, I used the **"git checkout maingit merge new-branch-name"** to checkout of the branch destination branch of the merge and 'merging in'. The **"git status"** command was again used to confirm that there are no conflicts in the merge action. With the **"git push remote_repo new-branch-name"** command, the committed changes where pushed to the remote location linked to my git.

One activity require forking the repository "https://github.com/IreshaGoanna/Assignment_Activity05". A file was then uploaded to the forked repository and a pull request sent to the main repository asking for permission to merge the uploaded file.
