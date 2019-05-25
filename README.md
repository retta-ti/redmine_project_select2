# Redmine Project Select2
Apply Select2 in the Redmine project selection.

## Compatibility
This was tested in version 3.3.3 of Redmine.

## Installing
1. Clone this repository: `git clone https://github.com/retta-ti/redmine_project_select2.git`
2. Access the clone folder and run the Select2 submodules init: `git submodule init && git submodule update --recursive`
2. Copy the clone folder to the plugins folder of your Redmine installation.
3. Run this command in the main directory of your Redmine installation: `bundle exec rake redmine:plugins:migrate NAME=redmine_project_select2 RAILS_ENV=production`
