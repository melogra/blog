(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{581:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mips汇编入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mips汇编入门"}},[t._v("#")]),t._v(" MIPS汇编入门")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("MIPS（"),e("strong",[t._v("M")]),t._v("icroprocessor without "),e("strong",[t._v("I")]),t._v("nterlocked "),e("strong",[t._v("P")]),t._v("ipeline "),e("strong",[t._v("S")]),t._v("tages），是一种采取精简指令集（RISC: "),e("strong",[t._v("r")]),t._v("educed "),e("strong",[t._v("i")]),t._v("nstruction "),e("strong",[t._v("s")]),t._v("et "),e("strong",[t._v("c")]),t._v("omputer）的指令集架构。最早的MIPS架构是32 bits，最新的版本已经变成64 bits（本文介绍的是32位版本）。")]),t._v(" "),e("p",[t._v("本文主要介绍：")]),t._v(" "),e("ul",[e("li",[t._v("寄存器")]),t._v(" "),e("li",[t._v("汇编程序结构")]),t._v(" "),e("li",[t._v("指令集\n"),e("ul",[e("li",[t._v("load / store 指令")]),t._v(" "),e("li",[t._v("算术指令")]),t._v(" "),e("li",[t._v("跳转指令")]),t._v(" "),e("li",[t._v("系统调用 / IO 指令")])])])]),t._v(" "),e("h3",{attrs:{id:"数据的表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据的表示"}},[t._v("#")]),t._v(" 数据的表示")]),t._v(" "),e("ul",[e("li",[t._v("所有MIPS指令都是32位")]),t._v(" "),e("li",[e("code",[t._v("1 byte = 8 bits, halfword = 2 bytes, 1 word = 4 bytes")])]),t._v(" "),e("li",[e("code",[t._v("1 char = 1 byte")])]),t._v(" "),e("li",[e("code",[t._v("1 int = 1 word = 4 bytes")])]),t._v(" "),e("li",[t._v("数字（number）"),e("strong",[t._v("直接输入")]),t._v("，例如："),e("code",[t._v("10")])]),t._v(" "),e("li",[t._v("单字符（character）用"),e("strong",[t._v("单引号")]),t._v("括起来，例如："),e("code",[t._v("'b'")])]),t._v(" "),e("li",[t._v("字符串（string）用"),e("strong",[t._v("双引号")]),t._v("括起来，例如："),e("code",[t._v('"A string"')])])]),t._v(" "),e("h3",{attrs:{id:"mips模拟器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mips模拟器"}},[t._v("#")]),t._v(" MIPS模拟器")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://courses.missouristate.edu/KenVollmar/MARS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MARS4.5"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#寄存器"}},[t._v("#")]),t._v(" 寄存器")]),t._v(" "),e("ul",[e("li",[t._v("MIPS共有32个"),e("strong",[t._v("通用寄存器")])]),t._v(" "),e("li",[t._v("在汇编指令中，寄存器以"),e("code",[t._v("$")]),t._v("开头，有两种表示方式\n"),e("ul",[e("li",[t._v("使用寄存器编号，例如："),e("code",[t._v("$0 ~ $31")])]),t._v(" "),e("li",[t._v("使用寄存器名称，例如："),e("code",[t._v("$t1, $sp")]),t._v("（寄存器的编号及名称含义见下表）")])])]),t._v(" "),e("li",[t._v("特殊的寄存器"),e("code",[t._v("Lo")]),t._v("和"),e("code",[t._v("Hi")]),t._v("用于存储乘法或除法运算的结果\n"),e("ul",[e("li",[t._v("不能直接访问"),e("code",[t._v("Lo")]),t._v("和"),e("code",[t._v("Hi")]),t._v("寄存器，它们的内容通过特殊的指令访问："),e("code",[t._v("mfhi")]),t._v("（move from Hi）和"),e("code",[t._v("mflo")]),t._v("（move from Lo）")])])]),t._v(" "),e("li",[t._v("栈的方向从存储器的"),e("strong",[t._v("高地址到低地址")])])]),t._v(" "),e("p",[t._v("各个寄存器编号、名称和描述：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("寄存器编号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("寄存器名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("英文全称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$zero")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("zero")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("值恒为0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$at")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("a")]),t._v("ssembler "),e("strong",[t._v("t")]),t._v("emporary")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("汇编保留寄存器（不可做其他用途）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$v0 , $v1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("v")]),t._v("alues")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("值来自于表达式求值和函数结果")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4-7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$a0 - $a3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("a")]),t._v("rguments")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存储子程序调用的前4个非浮点参数，在子程序中不会跨子程序保存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8-15")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$t0 - $t7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("t")]),t._v("emporaries")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("暂存寄存器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("16-23")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$s0 - $s7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("s")]),t._v("aved values")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通用寄存器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("24-25")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$t8 - $t9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("t")]),t._v("emporaries")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("临时变量，与$t0 - $t7一样")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("26-27")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$k0, $k1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("k")]),t._v("ernel reserved")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("操作系统内核保留寄存器，用于中断处理")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("28")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$gp")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("g")]),t._v("lobal "),e("strong",[t._v("p")]),t._v("ointer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("全局指针")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("29")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$sp")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("s")]),t._v("tack "),e("strong",[t._v("p")]),t._v("ointer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栈指针，指向栈顶")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("30")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$s8 / $fp")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("s")]),t._v("aved values / "),e("strong",[t._v("f")]),t._v("rame "),e("strong",[t._v("p")]),t._v("ointer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("帧指针，用于过程调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("31")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("$ra")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("r")]),t._v("eturn "),e("strong",[t._v("a")]),t._v("ddress")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("返回地址")])])])]),t._v(" "),e("h2",{attrs:{id:"汇编程序结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汇编程序结构"}},[t._v("#")]),t._v(" 汇编程序结构")]),t._v(" "),e("p",[t._v("MIPS源程序文件（文件后缀"),e("code",[t._v(".s")]),t._v("或"),e("code",[t._v(".asm")]),t._v("）中包含"),e("strong",[t._v("数据声明")]),t._v("和"),e("strong",[t._v("程序代码")]),t._v("两部分，数据声明在程序代码之前")]),t._v(" "),e("h3",{attrs:{id:"数据声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据声明"}},[t._v("#")]),t._v(" 数据声明")]),t._v(" "),e("p",[t._v("数据声明以汇编器指令"),e("code",[t._v(".data")]),t._v("作为开始标识。声明的语法为："),e("code",[t._v("[name]: [storage_type] [value]")])]),t._v(" "),e("p",[e("code",[t._v("storage_type")]),t._v("可以为"),e("code",[t._v(".byte")]),t._v("、"),e("code",[t._v(".word")]),t._v("、"),e("code",[t._v(".space")]),t._v("、"),e("code",[t._v("ascii")]),t._v("、"),e("code",[t._v(".asciiz")]),t._v("，例如：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".data\n  var_name: .word 123 # 声明变量var_name，占用1个字（4字节）空间，值为123\n  array1: .byte 'c', 'b'\n  array2: .space 40 # 长度为40的字符数组\n  str1: .asciiz \"a string\"\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("声明字符数组array1，包含2个字符元素，初始化为a和b")])]),t._v(" "),e("li",[e("p",[t._v("申请一段空间array2，在内存中分配连续的40个字节空间，array2未被初始化，可能是长度40的字符数组或长度为10的整型数组，因此建议"),e("strong",[t._v("在注释中说明用途")]),t._v("。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v(".ascii")]),t._v(" 会保存字符串在数据段但"),e("strong",[t._v("不会")]),t._v("加"),e("code",[t._v("null")]),t._v("终止符")])]),t._v(" "),e("li",[e("p",[e("code",[t._v(".asciiz")]),t._v(" 会保存字符串在数据段"),e("strong",[t._v("且")]),t._v("加"),e("code",[t._v("null")]),t._v("终止符")])])]),t._v(" "),e("h3",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),e("ul",[e("li",[t._v("代码放在"),e("code",[t._v(".text")]),t._v("标识后")]),t._v(" "),e("li",[t._v("代码段文本包含程序代码指令，以"),e("code",[t._v("main")]),t._v("作为程序入口")]),t._v(" "),e("li",[t._v("主代码的结束点应该使用“退出系统调用（功能），详见后续的“系统调用篇”")])]),t._v(" "),e("h3",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),e("p",[t._v("在一行内，任何在#之后的内容，将会被（编译器）认为是"),e("strong",[t._v("注释")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"标签-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签-label"}},[t._v("#")]),t._v(" 标签(label)")]),t._v(" "),e("p",[t._v("在代码中可以设定一个标签，方便跳转或标注，通常用于if - else 跳转或 jump，详见指令部分。")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".text\n__my_label:\n  lw $t0, var1   # $t0 = var1\ndone\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"mips程序示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mips程序示例"}},[t._v("#")]),t._v(" MIPS程序示例")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# example.s\n.data\n  # 数据声明\n  var1: .word 123\n  array1: .byte 'a','b'\n  array2: .space 40 # 申请40个字节的连续空间\n.text\n  # 指令代码 main为入口\nmain:\n  lw\t$t0, var1\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h2",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),e("h3",{attrs:{id:"load-store-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-store-指令"}},[t._v("#")]),t._v(" load / store 指令")]),t._v(" "),e("p",[t._v("只能使用load / store指令来访问内存，其他指令都是寄存器操作。")]),t._v(" "),e("p",[t._v("load指令：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 从RAM_source 复制1个字的内容到寄存器\nlw register_destination, RAM_source\n# lb = load byte\nlb register_destination, RAM_source\n# li = load immediate value 加载一个立即数到寄存器\nli register_destination, value\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Store 指令：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 将寄存器的数据写入内存\nsw register_source, RAM_destination\n# sb = store byte\nsb register_source, RAM_destination\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("example:\n.data\n  var1:\t.word 23 # 声明一个整型var1 = 23\n.text\n__start:\n  lw $t0, var1   # $t0 = var1\n  li $t1, 5      # $t1 = 5\n  sw $t1, var1   # var1 = $t1;\ndone\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"立即寻址、间接寻址和偏移量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#立即寻址、间接寻址和偏移量"}},[t._v("#")]),t._v(" 立即寻址、间接寻址和偏移量")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("直接寻址")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 将var1的RAM地址复制到t0寄存器\n# la = load address\nla $t0 var1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("间接寻址")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("($register)")]),t._v("将寄存器中的值作为地址：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 将t0寄存器中存放的值放到t2\n# 括号可以认为是“取寄存器的值”\nlw $t2, ($t0)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 将t2中存放的值写入t0的值指向的内存\nsw $t2, ($t0)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("偏移量")]),t._v(" "),e("p",[t._v("偏移量通常用于数组或栈")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# $t2 = ($t0 + 4)\nlw $t2, 4($t0)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("可以是负数的偏移量：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# ($t0 - 12) = $t2\nsw $t2, -12($t0)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])]),t._v(" "),e("p",[t._v("寻址的综合例子：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("example：\n.data\n  array1: .space "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 声明一个12字节长度的数组 array1, 可容纳3个整型")]),t._v("\n.text\n__start:\n  la "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t0")]),t._v(", array1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $t0 = 数组首地址")]),t._v("\n  li "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $t1 = 5")]),t._v("\n  sw "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# array[0] = $t1 = 5")]),t._v("\n  li "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $t1 = 13")]),t._v("\n  sw "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# array[1] = $t1 = 13")]),t._v("\n                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整型占4个字节，数组首地址偏移4字节就是array[1]的地址")]),t._v("\n  li "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", -7      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $t1 = -7")]),t._v("\n  sw "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# array + 8字节偏移 = array[2]的地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h3",{attrs:{id:"算术指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术指令"}},[t._v("#")]),t._v(" 算术指令")]),t._v(" "),e("ul",[e("li",[t._v("算术指令最多3个操作数")]),t._v(" "),e("li",[t._v("操作数只能是寄存器")]),t._v(" "),e("li",[t._v("MIPS所有指令都是32 bits")])]),t._v(" "),e("p",[t._v("加减法指令：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sub\t$t2, $t3, $t4   # $t2 = $t3 - $t4\naddi $t2, $t3, 5    # $t2 = $t3 + 5\n                    # addi = add immediate\n                    # 没有subi指令\naddu $t1, $t6, $t7  # $t1 = $t6 + $t7\n                    # addu = add unsigned integers\nsubu $t1, $t6, $t7  # $t1 = $t6 - $t7\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("乘除法指令：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mult $t3, $t4       # $t3, $t4的两个32位数相乘，得到一个64位数据\n                    # $hi 存放高位，$lo 存放低位\ndiv\t$t5, $t6        # $t5 / $t6\n                    # 商数存放在 $lo, 余数存放在 $hi\n\nmfhi $t0            # 不能直接获取 $hi 或 $lo 中的值， 需要mfhi, mflo指令传值给寄存器\nmflo $t1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("寄存器间赋值：")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("move $t2, $t3       # $t2 = $t3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"结构控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结构控制"}},[t._v("#")]),t._v(" 结构控制")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("分支（if - else）")]),t._v(" "),e("p",[t._v("满足条件则跳转到指定分支。")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("b\ttarget              # 无条件跳转到target\nbeq\t$t0, $t1, target  # $t0 = $t1\nblt\t$t0, $t1, target  # $t0 < $t1\nble\t$t0, $t1, target  # $t0 <= $t1\nbgt\t$t0, $t1, target  # $t0 > $t1\nbge\t$t0, $t1, target  # $t0 >= $t1\nbne\t$t0, $t1, target  # $t0 != $t1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("跳转")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("j\ttarget # 无条件跳转\njr $t3   # 跳转到$t3存放的地址，jr = jump register\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("子程序调用（函数调用）")]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("jal sub_label  # jump and link\n# 将当前的程序计数器（program counter PC指针）保存到$ra中\n# 然后跳到sub_label（指针指向sub_label）\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 通过$ra保存的返回地址跳回函数调用前的位置\njr $ra # jump register\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("如果调用的子程序中有调用了其他子程序，如此往复， 则"),e("strong",[t._v("用栈来保存返回地址")]),t._v("，毕竟$ra只有一个。")])])]),t._v(" "),e("h3",{attrs:{id:"系统调用和io"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统调用和io"}},[t._v("#")]),t._v(" 系统调用和IO")]),t._v(" "),e("p",[t._v("对参数寄存器进行设定后，执行"),e("code",[t._v("syscall")]),t._v("指令就可以进行系统调用和IO。")]),t._v(" "),e("ul",[e("li",[t._v("通过系统调用实现终端的输入输出，以及声明程序结束")]),t._v(" "),e("li",[t._v("参数所使用的寄存器：$v0，$a0,  $a1")]),t._v(" "),e("li",[t._v("返回值使用：$v0")])]),t._v(" "),e("p",[t._v("下表给出了系统调用中对应功能，代码，参数机返回值：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Service")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("$v0对应功能的调用码")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("返回值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("print_int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("打印整数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$a0 = 目标整型数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("print_float")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("打印浮点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$f12 = 目标浮点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("print_double")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("打印双精度浮点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$f12 = 目标双精度浮点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("print_string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("打印字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$a0 = 目标字符串的地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("read_int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从键盘读取整型数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回整型给 $v0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("read_float")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从键盘读取浮点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回浮点数给 $v0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("read_double")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从键盘读取双精度")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回双精度给 $v0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("read_string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从键盘读取字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$a0 = 目标字符串地址"),e("br"),t._v("$a1 = 目标字符串长度")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("sbrk")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("动态分配内存")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 = 9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$a0 = 需要分配的空间大小（单位bytes）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("将分配好的空间首地址返回给 $v0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("exit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$v0 =10")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出码")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 打印一个存储在寄存器 $2 里的整型\nli $v0, 1      # print_int 调用码为1\nmove $a0, $t2  # 目标整型数在放到$a0\nsyscall        # 进行系统调用\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 读取一个数，并且存储到内存中的 int_value 变量中\n.data\n\tint_value: .word 12\n.text\nmain:\n  li $v0, 5\t         # read_int 调用码为5\n  syscall            # 键盘读取操作后，$v0 = 输入的数字\n  sw $v0, int_value  # 将 $v0的值写入内存\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# 打印一个字符串\n.data\n\tstring1 .asciiz\t"Print this.\\n"\n.text\nmain:\n\tli $v0, 4        # print_string 调用码为4\n  la $a0, string1  # $a0 = address(string1)\n  syscall\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("div",{staticClass:"language-assembly line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 系统退出\nli $v0, 10 # exit 调用码为10\nsyscall\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);