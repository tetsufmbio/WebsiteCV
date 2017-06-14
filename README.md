# WebsiteCV
## My CV ~ first Website

Here I will create my first Website
Para a materia BIQ56-02 na UFMG.

### What I used to make this Website
1. *Catchbook*: Siemens PLM Software to make the vector grafics
2. *Inkscape*, for creating/naming groups, arranging elements
3. [vivus](https://maxwellito.github.io/vivus/) ~ a lightweight JavaScript class for path animations
4. Several thrird party libraries for layout, fonts and animations


#### Questions
1) The middle row is not in the center, what is the problem?
2) How to avoid that the middle content box is not going into the section2
3) the timeline is not reactive, doesn't stay in the middle content box



#### Concept
1) The overall naming logic is defined by group-ids (several groups can have a parent group/-id, svg-root-id is also considered as group-id)
2) To make a svg-element with *ID* clickable perform the following steps

   * add class="clickable"
   * To answer an fired click-event use the method *ID*() in the js-File
   * additional: all svg-element/root-element has to be hidden first (add class="hide"), element will be shown with its button elements through the method *show("svg-element-id")*
