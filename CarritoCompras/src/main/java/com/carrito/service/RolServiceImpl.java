package com.carrito.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrito.dao.IRol;
import com.carrito.domain.Rol;
import com.carrito.domain.Usuario;

@Service
public class RolServiceImpl implements IRolService{

	@Autowired
	private IRol rolDao;
	
	@Override
	public List<Rol> listarRoles() {
		// TODO Auto-generated method stub
		return rolDao.findAll();
	}

	@Override
	public Rol guardar(Rol rol) {
		// TODO Auto-generated method stub
		return rolDao.save(rol);
	}

	@Override
	public void elminar(Rol rol) {
		// TODO Auto-generated method stub
		rolDao.deleteById(rol.getIdRol());
	}

	@Override
	public List<Rol> findByUsuario(Usuario user) {
		// TODO Auto-generated method stub
		return rolDao.findByUser(user);
	}

	

}
