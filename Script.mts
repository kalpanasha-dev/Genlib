'##----------------------------------------------------------------------------------##
'## Driver Script
'##----------------------------------------------------------------------------------##
'##
'## VERSION: 1.0
'##
'## DESCRIPTION:
'##
'##   This script controls the entire E2E flow of the Test Case.
'##----------------------------------------------------------------------------------##
'#

'# REVISION HISTORY:

'#
'# DATE:                           PERSON:                               REASON:
'# -----------   --------------  ----------------------------------------------------##
'# 11-March-2014 	       POC Team                             Original.



'To get the folder path at run time
	Dim App
	Set App = CreateObject("QuickTest.Application")
	Environment.Value("Folder_Path")=App.Folders.Item(2)	
    EnvMngr_Path=Environment.Value("Folder_Path") & "\TestData"
	GenLib_Path=Environment.Value("Folder_Path") & "\TestLibrary\Development\GenLib.qfl"
	
	' Loading the GenLib file dynamically
	LoadFunctionLibrary GenLib_Path
	
	'To kill the processesM
	General_CloseProcess()

    	'Call to Environment manager function	
	Environment_Manager(EnvMngr_Path)

	
	''Call To Intial settings functions	
	Intial_Test_Settings()
		
	'Login to the application
	'Login()
	
	'Executes the screens based on the selection in the Flow manager table
   'Batch_Iteration ()

   	Get_Batch_Seq_Details()
   	
   	
 @@ hightlight id_;_349185_;_script infofile_;_ZIP::ssf725.xml_;_
 @@ hightlight id_;_4302081_;_script infofile_;_ZIP::ssf720.xml_;_
    


 @@ hightlight id_;_30854051_;_script infofile_;_ZIP::ssf677.xml_;_


 @@ hightlight id_;_65748_;_script infofile_;_ZIP::ssf718.xml_;_
