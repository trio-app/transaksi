<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller{
    
    function __construct() {
        parent::__construct();
        $this->load->helper('app_helper');
    }
    
    public function index(){
        $this->load->view('V_login');
    }
    
    public function Signin(){
		$JSONData = file_get_contents('php://input');

		$this->load->model('R_login');
		$data	= $this->R_login->Signin(json_decode($JSONData, TRUE));
		if(count($data)==1){
			$this->session->set_userdata('isLogin', TRUE);
			$this->session->set_userdata($data[0]);
                        //print_r($data[0]);
			echo 'success';
		}else{
			echo 'failed';
		}
    }
    
	public function signOut(){
		$session_array = array('user_id', 'user_name', 'user_group');
		$this->session->unset_userdata($session_array);
		$this->session->unset_userdata('isLogin');
		redirect('Login');
	}    
}

