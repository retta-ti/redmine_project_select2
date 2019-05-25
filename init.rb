require 'redmine'

Redmine::Plugin.register :redmine_project_select2 do
  name 'Project Select2 Plugin'
  author 'RETTA TI'
  description 'Apply Select2 in the Redmine project selection.'
  version '1.0.0'
  url 'https://github.com/retta-ti/redmine_project_select2'
  author_url 'https://github.com/retta-ti'
end

class ProjectSelect2ViewListener < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context)
      javascript_include_tag('select2/dist/js/select2.min.js', :plugin => :redmine_project_select2) +
      javascript_include_tag('redmine_project_select2.js', :plugin => :redmine_project_select2) +
      stylesheet_link_tag('select2/dist/css/select2.min.css', :plugin => :redmine_project_select2)
  end
end

