# Version control

The process of monitoring and managing changes to software code is known as version control, also commonly referred to as source control. Software technologies called version control systems assist software development teams in tracking changes to source code over time. Version control systems enable software teams to operate more swiftly and intelligently as development environments have increased. They are especially helpful for DevOps teams because they enable them to speed up successful deployments and cut down on development time.

Every change to the code is recorded by version control software in a particular form of database. If a mistake is made, programmers can go back in time and review prior iterations of the code to help fix it while causing the least amount of interruption to the entire team.

Without using any kind of version control, software development teams frequently encounter issues like not knowing which changes have been made are accessible to users or the generation of incompatible modifications between two unconnected pieces of work that must then be carefully untangled and revised. Developers that have never used version control may have added versions to their files, sometimes with suffixes like "final" or "latest", and then dealt with a new final version afterwards. You may have code blocks that are commented out because you wish to remove some functionality but keep the code in case you need it in the future. Version control offers a solution to these issues.

Version control software is a crucial component of the day-to-day professional activities of the modern software team. The enormous value version control provides them even on tiny solo projects is often recognised by individual software developers who are used to working with a capable version control system in their teams. Many developers wouldn't even think about working without version control systems for non-software tasks once they become acclimated to their potent advantages.

## 1. Git

### Feature 
-	Significant support for non-linear development is offered.
-	Model of a distributed repository.
-	Compatible with current protocols and systems including HTTP, FTP, and ssh.
-	Able to handle small- to large-scale projects with efficiency.
-	Historical verification using cryptography.
-	Programmable merging techniques.
-	Framework-based design.
-	Periodic packing of explicit objects.
-	Garbage builds up until it is collected.

### Pros
-	Incredibly quick and effective performance.
-	Cross-platform
-	Tracking code changes is simple.
-	Sturdy and easily maintainable.
-	Offers the excellent git bash command-line tool.
-	Provides a GIT GUI where you can easily re-scan, modify the status of the project, sign off, commit, and push the code with only a few clicks.

#### To set your global username/email configuration:

To set username:
git config --global user.name "FIRST_NAME LAST_NAME"

To set email address:
git config --global user.email "MY_NAME@example.com"

### Cons
-	Understanding a complex and larger history log is challenging.
-	Does not allow the preservation of timestamps and keyword expansion.

## 2. Concurrent Versions System (CVS)

### Feature
-	Model for a client-server repository.
-	The same project might be worked on concurrently by several developers.
-	Only when an edit conflict arises will CVS client require user intervention to maintain the working copy of the file current.
-	Keeps a record of the project's past.
-	Anonymous access to read.
-	To keep local copies up to date, use the 'Update' command.
-	Can support several project branches.
-	Symbolic links are excluded to prevent security risks.
-	Use delta compression for effective storage.

### Pros
-	Fantastic platform support.
-	A robust and feature-rich command-line client enables strong scripting.
-	The wide CVS community's helpful assistance enables efficient source code repository web browsing.
-	It's a well-established, well-understood tool.
-	Fits the open-source community's collaborative character perfectly.

### Cons
-	There are no source code repository integrity checks.
-	supports neither atomic check-outs nor commits.
-	Poor distributed source control support.
-	does not support merging tracking or signed revisions.


## 3. Subversion (SVN)

### Feature
-	Model for a client-server repository. SVK does, however, allow for distributed branches in SVN.
-	Directory versions exist.
-	Operations like moving, deleting, copying, and renaming are also versioned.
-	Allows for atomic commits.
-	Signed links with versions.
-	Versioned metadata in free form.
-	Binary diff storage that uses less space.
-	Branching is a low-cost process that is independent of file size.
-	Merge tracking, complete MIME support, path-based authorisation, file locking, and solo server operation are further features.

### Pros
-	Benefits from having quality GUI tools like TortoiseSVN.
-	Supports directories that are empty.
-	Provide stronger Windows support than Git.
-	Easy to administrate and set up.
-	Easily integrates with Windows, top IDEs, and Agile tools.

### Cons
-	Does not keep track of when files were modified.
-	Does not handle filename normalisation correctly.
-	Not compatible with signed revisions.


## 4. Mercurial

### Feature
-	high scalability and performance.
-	High level of branching and merging.
-	Collaborative development that is entirely distributed.
-	Decentralized Supports both binary and plain text files well.
-	Features a built-in web interface.

### Pros
-	Great performance and scalability.
-	Lots of merging and branching.
-	A distributed, collaborative development process.
-	Decentralized supports plain text and binary files as well.
-	Has an integrated web interface.

### Cons
-	Python must be used for all add-ons.
-	Checkouts in parts are not permitted.
-	When used with extra extensions, it becomes quite difficult

## 5. Monotone

### Feature
-	Provides excellent support for internationalisation and localisation.
-	Integrity is prioritised over performance.
-	Created with distributed processes in mind.
-	Tracks file revisions and authentications using cryptographic primitives.
-	Able to import CVS projects.
-	Utilises netsync, a very effective and reliable proprietary protocol.

### Pros
-	Reduced maintenance requirements
-	Adequate documentation
-	Simple to learn
-	Modular construction
-	Excellent results when branching and merging
-	Secure GUI

### Cons
-	Performance difficulties were noticed for a few operations, the initial draw being the most obvious.
-	Can’t check-out or commit while behind a proxy (this is because of a non-HTTP protocol).


## Selected software and suitability.
Git has been chosen for this project due to its many benefits highlighted above. it has the ability to sync seamlessly with github which is an online platform. it also suits the requirements outlined by the client.

## Installing Git
This project will be done using a windows computer as such, the windows version of git was installed. 

Git may be installed on Windows in a few different methods. On the Git website, you can get the most current build. Visit https://git-scm.com/download/win to initiate the download immediately. Keep in mind that this is a project called Git for Windows that is independent of the Git software; for further details, visit https://gitforwindows.org.

The Git Chocolatey package can be used to obtain an automatic installation. However, the Chocolatey package is community maintained.

One may also find it useful to install git from source to benefit from having the most recent version. The binary installers are typically a little behind, however as Git has grown in recent years, this has become less of an issue.

The following libraries must be present on your system in order to run Git: autotools, curl, zlib, openssl, expat, and libiconv. For instance, if you're using dnf (found in distributions like Fedora) or apt-get (found in distributions like Debian), you can use one of these commands to instal the prerequisites needed to compile and set up the Git binaries:

$ sudo dnf install dh-autoreconf curl-devel expat-devel gettext-devel \
  openssl-devel perl-devel zlib-devel
$ sudo apt-get install dh-autoreconf libcurl4-gnutls-dev libexpat1-dev \
  gettext libz-dev libssl-dev