/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '-188px'],
            ["transform", "translateY", '-192px']
         ],
         "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '-56px'],
            ["transform", "translateY", '-1px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '7px'],
            ["transform", "translateY", '13px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '12px'],
            ["transform", "translateY", '12px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '109px'],
            ["transform", "translateY", '-207px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)": [
            ["transform", "rotateZ", '145deg']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > a:nth-child(1)": [
            ["transform", "rotateZ", '117deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23719,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "rotateZ", '359deg', { fromValue: '145deg'}], position: 0, duration: 2049 },
            { id: "eid5", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "rotateZ", '0deg', { fromValue: '359deg'}], position: 2049, duration: 12951 },
            { id: "eid21", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-227px', { fromValue: '-192px'}], position: 0, duration: 1070, easing: "easeInOutBounce" },
            { id: "eid23", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-235px', { fromValue: '-227px'}], position: 1070, duration: 940, easing: "easeInOutBounce" },
            { id: "eid25", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-202px', { fromValue: '-235px'}], position: 2010, duration: 709, easing: "easeInOutBounce" },
            { id: "eid27", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-51px', { fromValue: '-202px'}], position: 2719, duration: 6047, easing: "easeInOutBounce" },
            { id: "eid58", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-240px', { fromValue: '-51px'}], position: 8766, duration: 6234, easing: "easeInOutBounce" },
            { id: "eid59", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-257px', { fromValue: '-240px'}], position: 15000, duration: 862, easing: "easeInBounce" },
            { id: "eid61", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-229px', { fromValue: '-257px'}], position: 15862, duration: 433, easing: "easeOutBounce" },
            { id: "eid63", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-267px', { fromValue: '-229px'}], position: 16295, duration: 1438, easing: "easeInBounce" },
            { id: "eid73", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '11px', { fromValue: '-267px'}], position: 17733, duration: 1105, easing: "easeInOutBounce" },
            { id: "eid75", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-51px', { fromValue: '11px'}], position: 18838, duration: 307, easing: "easeOutBounce" },
            { id: "eid94", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '14px', { fromValue: '-51px'}], position: 19145, duration: 1855, easing: "easeInOutBounce" },
            { id: "eid95", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-1px', { fromValue: '14px'}], position: 21000, duration: 500, easing: "easeInBounce" },
            { id: "eid99", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '-51px', { fromValue: '-1px'}], position: 21500, duration: 413, easing: "easeOutBounce" },
            { id: "eid107", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateY", '14px', { fromValue: '-51px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" },
            { id: "eid51", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-162px', { fromValue: '13px'}], position: 15000, duration: 1115, easing: "easeInOutBounce" },
            { id: "eid66", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-84px', { fromValue: '-162px'}], position: 16115, duration: 180, easing: "easeInOutBounce" },
            { id: "eid67", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-27px', { fromValue: '-84px'}], position: 16295, duration: 790, easing: "easeInBounce" },
            { id: "eid69", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '20px', { fromValue: '-27px'}], position: 17085, duration: 648, easing: "easeInOutBounce" },
            { id: "eid71", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-16px', { fromValue: '20px'}], position: 17733, duration: 1412, easing: "easeOutBounce" },
            { id: "eid79", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-162px', { fromValue: '-16px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid77", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-162px', { fromValue: '5px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid85", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-97px', { fromValue: '5px'}], position: 19145, duration: 1855, easing: "easeInBounce" },
            { id: "eid87", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '9px', { fromValue: '-16px'}], position: 19145, duration: 2355, easing: "easeInBounce" },
            { id: "eid97", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '16px', { fromValue: '-97px'}], position: 21000, duration: 913, easing: "easeOutBounce" },
            { id: "eid101", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '-162px', { fromValue: '9px'}], position: 21500, duration: 413, easing: "easeOutBounce" },
            { id: "eid103", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateY", '16px', { fromValue: '-162px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" },
            { id: "eid49", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '489px', { fromValue: '7px'}], position: 15000, duration: 1115, easing: "easeInOutBounce" },
            { id: "eid64", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '42px', { fromValue: '489px'}], position: 16115, duration: 180, easing: "easeInOutBounce" },
            { id: "eid65", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '9px', { fromValue: '42px'}], position: 16295, duration: 790, easing: "easeInBounce" },
            { id: "eid68", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '6px', { fromValue: '9px'}], position: 17085, duration: 648, easing: "easeInOutBounce" },
            { id: "eid70", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '10px', { fromValue: '6px'}], position: 17733, duration: 1412, easing: "easeOutBounce" },
            { id: "eid78", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '489px', { fromValue: '10px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid76", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '489px', { fromValue: '220px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid84", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '-48px', { fromValue: '220px'}], position: 19145, duration: 1855, easing: "easeInBounce" },
            { id: "eid86", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '9px', { fromValue: '10px'}], position: 19145, duration: 2355, easing: "easeInBounce" },
            { id: "eid96", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '8px', { fromValue: '-48px'}], position: 21000, duration: 913, easing: "easeOutBounce" },
            { id: "eid100", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '220px', { fromValue: '9px'}], position: 21500, duration: 413, easing: "easeOutBounce" },
            { id: "eid102", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > img:nth-child(1)", "translateX", '4px', { fromValue: '220px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" },
            { id: "eid39", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > img:nth-child(1)", "translateY", '12px', { fromValue: '12px'}], position: 10761, duration: 0, easing: "easeInOutBounce" },
            { id: "eid38", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > img:nth-child(1)", "translateX", '12px', { fromValue: '12px'}], position: 10761, duration: 0, easing: "easeInOutBounce" },
            { id: "eid31", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-230px', { fromValue: '-207px'}], position: 6187, duration: 1180 },
            { id: "eid33", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-244px', { fromValue: '-230px'}], position: 7367, duration: 1209 },
            { id: "eid35", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-245px', { fromValue: '-244px'}], position: 8576, duration: 987 },
            { id: "eid37", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-42px', { fromValue: '-245px'}], position: 9563, duration: 976 },
            { id: "eid41", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-156px', { fromValue: '-42px'}], position: 10539, duration: 932, easing: "easeInOutBounce" },
            { id: "eid43", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-204px', { fromValue: '-156px'}], position: 11471, duration: 809, easing: "easeInOutBounce" },
            { id: "eid45", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '-152px', { fromValue: '-204px'}], position: 12280, duration: 828, easing: "easeInOutBounce" },
            { id: "eid47", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateY", '15px', { fromValue: '-152px'}], position: 13108, duration: 768, easing: "easeInOutBounce" },
            { id: "eid9", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '-3px', { fromValue: '-1px'}], position: 0, duration: 3297 },
            { id: "eid11", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '154px', { fromValue: '-3px'}], position: 3297, duration: 617, easing: "easeInOutBounce" },
            { id: "eid13", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '249px', { fromValue: '154px'}], position: 3914, duration: 1462, easing: "easeInOutBounce" },
            { id: "eid15", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '272px', { fromValue: '249px'}], position: 5376, duration: 1567, easing: "easeInOutBounce" },
            { id: "eid54", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '178px', { fromValue: '272px'}], position: 6943, duration: 8057, easing: "easeInOutBounce" },
            { id: "eid55", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '272px', { fromValue: '178px'}], position: 15000, duration: 1295, easing: "easeInOutBounce" },
            { id: "eid82", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '268px', { fromValue: '272px'}], position: 16295, duration: 2850, easing: "easeInOutBounce" },
            { id: "eid83", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '272px', { fromValue: '268px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid90", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '0px', { fromValue: '272px'}], position: 19145, duration: 1390, easing: "easeInOutBounce" },
            { id: "eid91", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '272px', { fromValue: '0px'}], position: 20535, duration: 1378, easing: "easeInOutBounce" },
            { id: "eid105", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '0px', { fromValue: '272px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" },
            { id: "eid30", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '322px', { fromValue: '109px'}], position: 6187, duration: 1180 },
            { id: "eid32", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '445px', { fromValue: '322px'}], position: 7367, duration: 1209 },
            { id: "eid34", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '681px', { fromValue: '445px'}], position: 8576, duration: 987 },
            { id: "eid36", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '1011px', { fromValue: '681px'}], position: 9563, duration: 976 },
            { id: "eid40", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '872px', { fromValue: '1011px'}], position: 10539, duration: 932, easing: "easeInOutBounce" },
            { id: "eid42", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '642px', { fromValue: '872px'}], position: 11471, duration: 809, easing: "easeInOutBounce" },
            { id: "eid44", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '339px', { fromValue: '642px'}], position: 12280, duration: 828, easing: "easeInOutBounce" },
            { id: "eid46", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)", "translateX", '5px', { fromValue: '339px'}], position: 13108, duration: 768, easing: "easeInOutBounce" },
            { id: "eid20", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-435px', { fromValue: '-188px'}], position: 0, duration: 1070, easing: "easeInOutBounce" },
            { id: "eid22", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-682px', { fromValue: '-435px'}], position: 1070, duration: 940, easing: "easeInOutBounce" },
            { id: "eid24", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-907px', { fromValue: '-682px'}], position: 2010, duration: 709, easing: "easeInOutBounce" },
            { id: "eid26", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-975px', { fromValue: '-907px'}], position: 2719, duration: 6047, easing: "easeInOutBounce" },
            { id: "eid56", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-633px', { fromValue: '-975px'}], position: 8766, duration: 6234, easing: "easeInOutBounce" },
            { id: "eid57", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-291px', { fromValue: '-633px'}], position: 15000, duration: 862, easing: "easeInBounce" },
            { id: "eid60", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-718px', { fromValue: '-291px'}], position: 15862, duration: 433, easing: "easeOutBounce" },
            { id: "eid62", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-117px', { fromValue: '-718px'}], position: 16295, duration: 1438, easing: "easeInBounce" },
            { id: "eid72", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '9px', { fromValue: '-117px'}], position: 17733, duration: 1105, easing: "easeInOutBounce" },
            { id: "eid74", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-975px', { fromValue: '9px'}], position: 18838, duration: 307, easing: "easeOutBounce" },
            { id: "eid92", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '7px', { fromValue: '-975px'}], position: 19145, duration: 1855, easing: "easeInOutBounce" },
            { id: "eid93", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '2px', { fromValue: '7px'}], position: 21000, duration: 500, easing: "easeInBounce" },
            { id: "eid98", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '-975px', { fromValue: '2px'}], position: 21500, duration: 413, easing: "easeOutBounce" },
            { id: "eid106", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > img:nth-child(1)", "translateX", '4px', { fromValue: '-975px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" },
            { id: "eid7", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-66px', { fromValue: '-56px'}], position: 0, duration: 3297 },
            { id: "eid10", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-281px', { fromValue: '-66px'}], position: 3297, duration: 617, easing: "easeInOutBounce" },
            { id: "eid12", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-474px', { fromValue: '-281px'}], position: 3914, duration: 1462, easing: "easeInOutBounce" },
            { id: "eid14", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-663px', { fromValue: '-474px'}], position: 5376, duration: 1567, easing: "easeInOutBounce" },
            { id: "eid52", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-629px', { fromValue: '-663px'}], position: 6943, duration: 8057, easing: "easeInOutBounce" },
            { id: "eid53", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-663px', { fromValue: '-629px'}], position: 15000, duration: 1295, easing: "easeInOutBounce" },
            { id: "eid80", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-656px', { fromValue: '-663px'}], position: 16295, duration: 2850, easing: "easeInOutBounce" },
            { id: "eid81", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-663px', { fromValue: '-656px'}], position: 19145, duration: 0, easing: "easeInOutBounce" },
            { id: "eid88", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-76px', { fromValue: '-663px'}], position: 19145, duration: 1390, easing: "easeInOutBounce" },
            { id: "eid89", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-663px', { fromValue: '-76px'}], position: 20535, duration: 1378, easing: "easeInOutBounce" },
            { id: "eid104", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '-56px', { fromValue: '-663px'}], position: 21913, duration: 1806, easing: "easeInOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-37910006");
