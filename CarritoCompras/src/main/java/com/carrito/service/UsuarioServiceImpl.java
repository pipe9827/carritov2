package com.carrito.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.dao.IUsuario;
import com.carrito.domain.Rol;
import com.carrito.domain.Usuario;

@Service
public class UsuarioServiceImpl implements IUsuarioService{
 
	@Autowired
	private IUsuario usuarioDao;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> listarUsuarios() {
		// TODO Auto-generated method stub
		return usuarioDao.findAll();
	}

	@Override
	@Transactional
	public Usuario guardar(Usuario usuario) {
		
		return usuarioDao.save(usuario);
		
	}

	@Override
	@Transactional
	public void elminar(Usuario usuario) {
		usuarioDao.delete(usuario);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario encontrarUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		return usuarioDao.findById(usuario.getIdUsuario()).orElse(null);
	}

	@Override
	public Usuario fetchUserByUsernameAndPassword(String username, String password) {
		return usuarioDao.findByUsernameAndPassword(username, password);
	}


}
